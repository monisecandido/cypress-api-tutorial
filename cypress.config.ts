import { defineConfig } from "cypress";
import { faker } from "@faker-js/faker";

export default defineConfig({
  e2e: {
    baseUrl: "https://serverest.dev",
    video: false,
    setupNodeEvents(on, config) {
      on("task", {
        freshUser() {
          const firstName = faker.name.firstName();
          const lastName = faker.name.lastName();
          return {
            nome: `${firstName} ${lastName}`,
            email: faker.internet.email(firstName, lastName),
            password: faker.internet.password(),
            administrador: String(faker.datatype.boolean())
          }
        }
      })
    }
  },
});
