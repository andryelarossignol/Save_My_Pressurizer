const knex = require("../database/knex");

class ClientesController {
    async create(request, response) {
        const { first_name, last_name, cpf, email, phone, postal_code, street, number, complement, installation_date  } = request.body
        const user_id = request.user.id;
    
        const [cliente_id] = await knex("clientes").insert({
            first_name,
            last_name,
            cpf,
            email,
            phone,
            postal_code,
            street,
            number,
            complement,
            installation_date,
            user_id
        })
        return response.json();

      }
  async show(request, response) {
    const { id } = request.params

    const cliente = await knex("clientes").where({ id }).first()
   

    return response.json({cliente})
  }
  async delete(request, response) {
    const { id } = request.params

    await knex("clientes").where({ id }).delete()

    return response.json()
  }  
  async index(request, response) {
    const user_id = request.user.id;

    const clientes = await knex("clientes")
    .where({ user_id })

    return response.json(clientes)
  }
}

module.exports = ClientesController;
