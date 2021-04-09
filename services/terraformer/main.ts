import * as gRPC from "@grpc/grpc-js"

import { CartographerClient } from "../cartographer/schema/schema"

const client = new CartographerClient("0.0.0.0:50051", gRPC.ChannelCredentials.createInsecure())

client.retrieveChunk({ id: 0 }, (error, response) => {
    console.log("A", response.foobar)
    console.log("B", error)
})

console.log("FOOBAR")