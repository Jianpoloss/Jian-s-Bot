const discord=require("discord.js");
const client= new discord.Client();
const config=require("./config.json")
client.on("ready",()=>{
    console.log("sto partendo ao")
})

client.on("message",message=>{
    console.log("sto programmando")
    let prefisso="." 

    if(message.content.indexOf(prefisso) !=0) return

    let argomenti=message.content.slice(1).trim().split(/ +/g)
    let comando=argomenti.shift().toLowerCase() //kick
  
    if(comando==="ciao"){
        message.channel.send("Ciao come va?")
    }   
    if(comando==="help"){
        message.channel.send("Scrivi .help categoria dell'aiuto: help_chat, help_minigames.")
    }
    if(comando==="insalata"){
        message.channel.send("Meglio la pizza ")
    }   
    if(comando==="come va?"){
        message.channel.send("Bene grazie! ")
    }   
    if(comando==="male"){
        message.channel.send("Incolpa jian non me! ")
    }   
    if(comando==="funny"){
        message.channel.send("I nutella biscuits sono molto buoni")
    }   
    if(comando==="anime"){
        message.channel.send("L'anime preferito di jian è The sven deadly sins")
    }   
    if(comando==="ahahaha"){
        message.channel.send("Sono bravo come comico sai? ")
    }   
    if(comando==="bene"){
        message.channel.send("Ottimo")
    }   
    if(comando==="pokèmon"){
        message.channel.send("Ghotta chat e'mall")
    }   
    if(comando==="classifica_server"){
        message.channel.send("Ecco a voi la classifica del server:trophy: 1^Jianpoloss. 2^Serpe. 3^it's me mario!. 4^ EntityKun.")
    }   
    if(comando==="idea"){
        message.channel.send("Ehy, vuoi darmi dei suggerimenti per migliorare? Vai qui e manda risposta a jian:https://vtzhvhl6nx5.typeform.com/to/hL7uUauq")
    }   
    if(comando==="novità"){
        message.channel.send("Ehy, ecco qui le mie nuove nuovose novità!: Ora ho aggiunto un comando che permette agli utenti di votarmi e darmi delle idee e infine ora c'è un comando per i pokèmon!!1 Versione 1.0.1")
    }   
    if(comando==="server"){
        message.channel.send("Server in cui sono registrato: 7!")
    }
    if(comando==="nucke"){
        message.channel.send("Il canale è esploso e anche tu. Grazie! https://media.giphy.com/media/O3GqAYR9jFxLi/giphy.gif")
    }
    if(comando==="foxy"){
        message.channel.send("https://th.bing.com/th/id/R558b0d19b030bfac094dced478c8e1b9?rik=01br82JH7%2fS3ng&riu=http%3a%2f%2fwww.abruzzolive.it%2fwp-content%2fuploads%2f2015%2f09%2fvolpe.jpg&ehk=Npqu0fzJa9GAMi5on0wn1eQKylkLWhAWSMoIXoQSHyA%3d&risl=&pid=ImgRaw")
    }
    if(comando==="panda"){
        message.channel.send("https://wildtrack.org/wp-content/uploads/2014/03/panda-cub-showing-foot.jpg")
    }
    if(comando==="tiger"){
        message.channel.send("https://www.infoescola.com/wp-content/uploads/2010/06/tigre-siberiano-116960752.jpg")
    }
    if(comando==="turtle"){
        message.channel.send("https://www.guidapet.com/wp-content/uploads/2013/02/Tartaruga-.jpg")
    }
    if(comando==="snake"){
        message.channel.send("https://cdn.discordapp.com/attachments/796320005109055498/801904445779738695/Serpente3.jpg ecco a voi @Serpe268YT#1589")
    }
    if(comando==="help_chat"){
        message.channel.send("Ottimo ecco tutti i comandi della chat:ciao-insalata-come va?-bene- ahahaha-anime.")
    }
    if(comando==="help_minigames"){
        message.channel.send("Ottimo ecco tutti i comandi dei minigiochi da scrivere in chat: tiger - turtle - panda- foxy- snake - nucke, sever: (vede in quanti server è registrato jian s'bot :smile:). comandi per i lavori: lavoro. Comando per la palla 8: 8ball. Comandi per utilità: Comando per vedere il ping del bot e la sua connessione (vi ricordo che se avete problemi tecnici potete contattare lo staff): ping. E inifne idea. i comandi possono essere eseguibili con il prefisso(.) comandi verrano aggiunti in futuro.")
    }
    if(comando==="lavoro"){
        message.channel.send("Ecco dove puoi lavorare: imprenditore-panificio-maestro-giornalaio-sviluppatore. Per lasciare il tuo lavoro basta che fai lascia_lavoro")
    }
    if(comando==="lascia_lavoro"){
        message.channel.send("Eh già l lavoro è duro, ora puoi scegliere un'altro lavoro più semplice :D")
    }
    if(comando==="diventa_imprenditore"){
        message.channel.send("Ottimo sei un'imprenditore lavora bene!https://images-ext-1.discordapp.net/external/ClS63GW9IaeKeP2C04Z68Z6aXYe_A7rIAup4xP4h5Vg/https/i.giphy.com/media/xSVQgqlSTMXYs/source.gif?width=487&height=473 .")
    }
    if(comando==="diventa_panificiere"){
        message.channel.send("Ottimo sei un panificiere lavora bene!https://images-ext-1.discordapp.net/external/ClS63GW9IaeKeP2C04Z68Z6aXYe_A7rIAup4xP4h5Vg/https/i.giphy.com/media/xSVQgqlSTMXYs/source.gif?width=487&height=473 .")
    }
    if(comando==="diventa_maestro"){
        message.channel.send("Ottimo sei un maestro, lavora bene!https://images-ext-1.discordapp.net/external/ClS63GW9IaeKeP2C04Z68Z6aXYe_A7rIAup4xP4h5Vg/https/i.giphy.com/media/xSVQgqlSTMXYs/source.gif?width=487&height=473 .")
    }
    if(comando==="diventa_giornalaio"){
        message.channel.send("Ottimo sei un giornalaio, lavora bene!https://images-ext-1.discordapp.net/external/ClS63GW9IaeKeP2C04Z68Z6aXYe_A7rIAup4xP4h5Vg/https/i.giphy.com/media/xSVQgqlSTMXYs/source.gif?width=487&height=473 .")
    }
    if(comando==="diventa_sviluppatore"){
        message.channel.send("Ottimo sei un sviluppatore, programma bene!https://images-ext-1.discordapp.net/external/ClS63GW9IaeKeP2C04Z68Z6aXYe_A7rIAup4xP4h5Vg/https/i.giphy.com/media/xSVQgqlSTMXYs/source.gif?width=487&height=473 .")
    }
    if(comando==="8ball"){
        message.channel.send("Ovviamente.")
    }
    if(comando==="ping"){
        message.channel.send("pong! 69 ms.")
    }
    
    
})
client.login (config.token);