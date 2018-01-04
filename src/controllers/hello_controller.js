import {Controller} from "stimulus"

export default class extends Controller {
    connect() {
        console.log(`Hey ${this.name}!`, this.element)
    }
    get name() {
        return this.inputElement.value
    }
    get inputElement() {
        return this.targets.find("name")
    }
}
