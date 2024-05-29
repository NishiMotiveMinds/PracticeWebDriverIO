import axios from "axios";
import { expect } from "chai";

describe(" Negative Response code Test - Get API request Tests", async () => {
    it("Would be able to get user list", async () => {
        const res = await axios.get('https://reqres.in/api/users?page=2');
        console.log(res.data);
        expect(res.data.page).equal(2);
        expect(res.data.per_page).equal(6);
        expect(res.status).equal(204);
    })
})