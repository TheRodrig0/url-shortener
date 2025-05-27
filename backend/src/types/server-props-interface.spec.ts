import { describe, it, expect } from "vitest"
import { FakeServerMock } from "../mocks/fake-server-mock"

describe("FakeServerMock", () => {
    it("should register plugins", () => {
        const server = new FakeServerMock()
        expect(server.register(() => 0)).toBe("registered")
    })

    it("should call listen callback with address", () => {
        const server = new FakeServerMock()
        let address = ""
        server.listen({ port: 1234 }, (err, addr) => {
            address = addr
        })
        expect(address).toBe("localhost:1234")
    })
})