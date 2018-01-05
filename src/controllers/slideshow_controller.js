import {Controller} from "stimulus"

export default class extends Controller {
    initialize() {
        this.render()
    }

    render() {
        this.slideshowElements.forEach((element, index) => {
            element.classList.toggle("slide--current", index == this.index)
        })
    }

    get slideshowElements() {
        return this.targets.findAll("slide")
    }

    get index() {
        if(this.data.has("index")){
            return parseInt(this.data.get("index"))
        }
        else
            return 0
    }
    set index(value){
        this.data.set("index", value)
        this.render()
    }
    get lastIndex(){
        return this.slideshowElements.length - 1
    }
    next(){
        if(this.index < this.lastIndex){
            this.index++
        }
    }
    previous(){
        if(this.index > 0){
            this.index--
        }
    }
}
