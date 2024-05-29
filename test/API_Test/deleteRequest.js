import axios from "axios";
import { expect } from "chai";

describe(" DELETE API request Tests", async () => {
    it("Sould be able to Delete the user", async () => {
        const res = await axios.delete('https://reqres.in/api/users/2');
        console.log(res.data);
        expect(res.status).equal(204);
    })
})