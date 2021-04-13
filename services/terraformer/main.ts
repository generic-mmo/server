import Cartographer from "@generic-mmo/cartographer-service";



const client = new Cartographer()

client.retrieveChunk({ id: 2 })
    .then(console.log.bind(console))