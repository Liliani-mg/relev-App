const request = require("supertest");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

require("dotenv").config();

//Assertion Style
chai.should();
chai.use(chaiHttp);

/**
 * Testing the GET (by id) route
 */

describe("Test for users", () => {
 const users =
    {
        name: "Marge Simpson",
        roleId: 2,
        email: "marge@mail.com",
        password: "Hola1234",
        areaId: 1,
    }
  describe("GET /users/:id", () => {
    it("respond with json containing a user", (done) => {
      const userId = 1;
      chai
        .request(app)
        .get(`/users/${userId}`)
        .end((err, response) => {
          response.should.have.status(200);
          response.should.have.header("content-type", /json/);
          done();
        });
    });

    it("respond with HTML Error `User not found` when the user does not exist", (done) => {
      chai
        .request(app)
        .get("/users/" + 101)
       
        .end((err, response) => {
          response.should.have.status(404);
          response.should.have.header(
            "content-type",
            "text/html; charset=utf-8"
          );
          done();
        });
    });
  });

  /**
   * Testing the POST user route
   */
  describe("POST /users/register", () => {
    it("respond with `User created successfully`", (done) => {
      const data = {
        name: "Edna Krabappel",
        email: "edna@mail.com",
        password: "Hola1234",
        roleId: 2,
      };
      chai
        .request(app)
        .post("/users/register")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send(data)
        .end((err, response) => {
          response.should.have.status(201);
          response.should.have.header("content-type", /json/);
          done();
        });
    });
  });

  /**
   * Testing the POST auth route
   */

  describe("POST /auth", () => {
    it("respond with `Authenticated successfully`", (done) => {
      const data = {
        email: "marge@mail.com",
        password: "Hola1234",
      };
      chai
        .request(app)
        .post("/auth/login")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send(data)
        .end((err, response) => {
          response.should.have.status(200);
          response.should.have.header("content-type", /json/);
          done();
        });
    });
  });

});