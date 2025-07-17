import ElementUtils from "../Element"
import BaseElement from "./Base"
import { CenterConstraint, ScrollComponent, UIRoundedRectangle, UIText } from "../../Elementa"

export default class BoxElement extends BaseElement {
    constructor(x = 10, y = 10, width = 20, height = 50) {
        super(x, y, width, height, null, null, "Box")

        this.text = "Placeholder"
        this.buttons = new Set()
    }

    /**
     * - Sets the text for the this tab element
     * @param {String} text
     * @returns this for method chaining
     */
    setText(text) {
        this.text = text

        return this
    }

    /**
     * - Makes a tab component with the given values [x, y, w, h]
     * @returns UI block component
     */
    _create(colorScheme = {}) {
        if (!this.colorScheme) this.colorScheme = colorScheme

        this.mainBlock = new UIRoundedRectangle(5)
            .setX(this.x)
            .setY(this.y)
            .setWidth(this.width)
            .setHeight(this.height)
            .setColor(new ElementUtils.JavaColor(0 / 255, 0 / 255, 0 / 255, 50 / 255))

        this.blockText = new UIText(this.text, false)
            .setX(new CenterConstraint())
            .setY((5).percent())
            .setChildOf(this.mainBlock)

        this.scrollableContainer = new ScrollComponent("Nothing found", 5.0)
            .setX(new CenterConstraint())
            .setY((10).percent())
            .setWidth((80).percent())
            .setHeight((80).percent())
            .setChildOf(this.mainBlock)

        this.buttons?.forEach(button => {
            // Creates a button
            button
                ._create(this.colorScheme)
                .setChildOf(this.scrollableContainer)
        })

        return this.mainBlock
    }

    getParent() {
        return this.mainBlock
    }

    addButton(button) {
        if (button instanceof Array) {
            button.forEach(btn => this.buttons.add(btn))

            return this
        }

        this.buttons.add(button)

        return this
    }
}
