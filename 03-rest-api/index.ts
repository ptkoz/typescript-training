import { Resource } from "./Interfaces";

function displayResources(resources: Resource[]) {
    for (let resource of resources) {
        console.log("Name: ");
        console.log("Surname: ");
        console.log("Hourly rate: ");
    }
}
