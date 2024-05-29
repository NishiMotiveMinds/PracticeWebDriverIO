import axios from "axios";
import { expect } from "chai";
import {faker} from "@faker-js/faker";

describe(" PUT API request Tests", async () => {
    it("Sould be able to Update the user Details", async () => {
        const randomName = faker.person.fullName();
        const randomJobTitle = faker.person.jobTitle();
        const res = await axios.put('https://reqres.in/api/users/2',
            {
                "name": randomName,
                "job": randomJobTitle
            });
        console.log(res.data);
        expect(res.data.name).equal(randomName);
        expect(res.data.job).equal(randomJobTitle);
    })
})