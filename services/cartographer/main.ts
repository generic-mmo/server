import * as gRPC from "@grpc/grpc-js"

import {
    CartographerService,
    RetrieveChunkResponse
} from "./schema/schema"


const server = new gRPC.Server()

server.addService(CartographerService, {
    retrieveChunk: retrieveChunk
})

// @ts-ignore
function retrieveChunk(call: unknown, callback) {
    const response: RetrieveChunkResponse = { foobar: "Well done!"}
    callback(null, response)
}


server.bindAsync("0.0.0.0:50051", gRPC.ServerCredentials.createInsecure(), () => {
    server.start()
})