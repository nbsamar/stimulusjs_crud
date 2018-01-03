import {Controller} from "stimulus"

export default class extends Controller {
    connect() {
        const target_element = this.targets.find("name")
        const name = target_element.value
        console.log(`Hey! ${name}`, this.element)
    }
}
