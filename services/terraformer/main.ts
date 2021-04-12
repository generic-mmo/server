import Cartographer from "@generic-mmo/cartographer-service";



const client = new Cartographer()

client.retrieveChunk({ id: 0 }, (error: any, response: any) => {
    console.log("A", response)
    console.log("B", error)
})
