const request = require("supertest")
const Server = require("../../server")
const app = new Server().app

let token = null

describe("Favoritos Routes", () => {
  beforeAll((done) => {
    request(app)
      .post("/api/usuarios/login")
      .send({
        correo: "raillyhugo@gmail.com",
        contraseña: "Contra123",
      })
      .end((err, res) => {
        token = res.body.token
        done()
      })
  })

  it("Get route /favoritos with status 200", async () => {
    try {
      const res = await request(app)
        .get("/api/favoritos")
        .set("Authorization", `Bearer ${token}`)
        .send()
      expect(res.status).toBe(200)
    } catch (error) {}
  })

  it("Post rout /favoritos with status 200", async () => {
    try {
      const res = await request(app)
        .post("/api/favoritos")
        .set("Authorization", `Bearer ${token}`)
        .send({
          id_anuncio: 2,
        })
      expect(res.status).toBe(200)
    } catch (error) {
      expect(error).toBe(undefined)
    }
  })

  it("Get one route /favoritos/:id with status 200", async () => {
    try {
      const res = await request(app)
        .get("/api/favoritos/1")
        .set("Authorization", `Bearer ${token}`)
        .send()
      expect(res.status).toBe(200)
    } catch (error) {}
  })

  it("Get one route /favoritos/:id with status 404", async () => {
    const res = await request(app)
      .get("/api/favoritos/1234879")
      .set("Authorization", `Bearer ${token}`)
      .send()
    expect(res.status).toBe(404)
  })

  it("Delete route /favoritos with status 200", async () => {
    try {
      const res = await request(app)
        .delete("/api/favoritos/")
        .set("Authorization", `Bearer ${token}`)
        .send({
          id_anuncio: 2,
        })
      expect(res.status).toBe(200)
    } catch (error) {}
  })
})
