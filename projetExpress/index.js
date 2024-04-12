const express = require('express');
const fs = require('fs');
const { spawn } = require('child_process');
const app = express();
app.use(express.static('public'));

// middleware pour parse les donnés du formulaire
app.use(express.urlencoded({ extended: true }));

app.get('/form', (req, res) => {
    fs.readFile('formulaire.html', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send("Erreur lors du chargement du formulaire");
            return;
        }
        res.send(data);
    });
});



app.post('/rep', (req, res) => {
    const { R, G, B, shape, surface, modele } = req.body;

    const modelPath = modele === 'svm' ? '../model/modele_svm.joblib' : '../model/modele_tree.joblib';
    const args = [R, G, B, shape, surface, modelPath];

    const pythonProcess = spawn('python', ['../script/predict.py', ...args]);
    let dataToSend = '';

    pythonProcess.stdout.on('data', (data) => {
        dataToSend += data.toString();
    });

    pythonProcess.on('close', (code) => {
        if (code !== 0) {
            console.error(`Script Python s'est terminé avec le code ${code}`);
            res.status(500).send("Erreur lors de l'exécution du script Python");
            return;
        }

        let responseContent = "";
        switch(dataToSend.trim()) {
            case 'Poisonous':
                responseContent = `<img src="/Poisonous.png" alt="Toxic!" style="width: 50px;"><p>Résultat de la prédiction : Toxique! Allez voir un spécialiste</p>`;
                break;
            case 'Edible':
                responseContent = `<img src="/Edible.png" alt="Edible" style="width: 50px;"><p>Résultat de la prédiction : Mangeable, Bonne dégustation! (pas sur à 100%)</p>`;
                break;
            case 'Inedible':
                responseContent = `<img src="/Inedible.png" alt="Inedible" style="width: 50px;"><p>Résultat de la prédiction : Non comestible! Allez voir un spécialiste</p>`;
                break;
            default:
                responseContent = `<p>Résultat de la prédiction : ${dataToSend}</p>`;
                break;
        }

        res.contentType('text/html');
        res.send(`
            <html>
                <head>
                    <meta http-equiv="refresh" content="10;url=/form" />
                    <style>
                        html, body {
                            height: 100%;
                            margin: 0;
                            padding: 0;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-family: Arial, sans-serif;
                        }
                        div {
                            text-align: center;
                        }
                    </style>
                </head>
                <body>
                    <div>${responseContent}
                        <p>Vous serez redirigé vers le formulaire dans 10 secondes. <a href="/form">Cliquez ici</a> si la redirection ne fonctionne pas.</p>
                    </div>
                </body>
            </html>
        `);
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Erreur : ${data}`);
        res.status(500).send("erreur d'exécution du script Python");
    });
});




// Démarrer le serveur
const PORT = 8080;
app.listen(PORT, () => { console.log(`Le serveur écoute sur le port ${PORT},`, `tenez le lien 'http://localhost:8080/form'`);});