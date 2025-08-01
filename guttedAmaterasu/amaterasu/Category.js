import ElementUtils from "../DocGuiLib/Element"
import Button1Element from "../DocGuiLib/elements/Button1"
import Button1Element from "../DocGuiLib/elements/Button1"
import DividerElement from "../DocGuiLib/elements/Divider"
import { CenterConstraint, CramSiblingConstraint, ScrollComponent, SiblingConstraint, UIRoundedRectangle } from "../elementa"
import CreateElement from "./CreateElement"

export default class Category {
    /**
     * @param {Settings} parentClass
     */
    constructor(parentClass, categoryName, selected = false, shouldCreate = true) {
        this.parentClass = parentClass
        this.categoryName = categoryName

        this.handler = this.parentClass.handler
        this.leftBlock = this.parentClass.leftBlock
        this.mainBlock = this.parentClass.mainBlock
        this.mainRightBlock = this.parentClass.mainRightBlock
        this.config = this.parentClass.config
        this._shouldShow = null

        // This is used to know if this category
        // is the one currently being selected
        this.selected = selected

        this.rightBlock = new ScrollComponent("", 5.0)
            .setX((1).pixel())
            .setY((1).pixel())
            .setWidth((98).percent())
            .setHeight((98).percent())
            .setChildOf(this.mainRightBlock)

        // This one is pretty self explanatory however.
        // [elementsSlider] here refers to the [scrollbar]
        this.elementsSlider = new UIRoundedRectangle(3)
            .setX((3).pixels(true))
            .setWidth(this.parentClass.AmaterasuGui.scrollbarSize.pixels())
            .setColor(ElementUtils.getJavaColor(this.handler.getColorScheme().Amaterasu.scrollbar.color))

        this.rightBlock.setScrollBarComponent(this.elementsSlider, true, false)

        // Adding side button with the category name into the sidebar
        this.sidebarButton = new Button1Element(this.categoryName, 0, 0, 80, 8)
            ._setPosition(
                (1).pixel(),
                new SiblingConstraint(3),
            )
            .onMouseClickEvent(() => {
                // Avoid hiding this element incase it's the only one being shown
                if (this.parentClass.currentCategory && this.parentClass.currentCategory === this.categoryName) return

                this._setSelected(true)
                this.parentClass._checkCategories()
                this.parentClass._onClickSound?.()
            })

        this.sidebarComp = this.sidebarButton
            ._create(this.handler.getColorScheme())
            .setChildOf(this.leftBlock)

        // Hide/Unhides this category from the main block
        this._refresh()
        // Creat the elements for this gui based off of the [JSON] file
        if (shouldCreate) this.createElementClass = new CreateElement(this)
    }

    /**
     * - Sets the current [selected] variable for this [Category]
     * @param {Boolean} toggle
     * @returns this for method chaining
     */
    _setSelected(toggle = false) {
        this.selected = toggle
        this._refresh()

        return this
    }

    _refresh() {
        if (!this.selected) {
            this.rightBlock.hide(true)
            this.rightBlock.loseFocus()
            this.sidebarButton.text.setColor(this.sidebarButton._getColor("text", "color"))
            this.mainRightBlock.removeChild(this.elementsSlider)
            this.createElementClass?._hideDropDownComps()

            return
        }

        this.rightBlock.unhide(true)
        this.rightBlock.scrollToTop(true)
        this.sidebarButton.text.setColor(this.sidebarButton._getColor("text", "selectedColor"))
        this.mainRightBlock.addChild(this.elementsSlider)

        this.parentClass.currentCategory = this.categoryName
        if (!this.parentClass.oldCategory) this.parentClass.oldCategory = this.categoryName
    }

    /**
     * - Updates the parent class' element
     * @param {any} element
     * @returns this for method chaining
     */
    _updateElement(element) {
        let name = element.name ?? element.configName
        this.parentClass.settings[name] = element.value
        this.createElementClass._hideElement(this.parentClass.settings)

        return this
    }

    /**
     * - Creates a divider with a string in the middle
     * @param {String} string
     * @returns this for method chaining
     */
    _createDivider(string, isSubCategory = false) {
        new DividerElement(string, 0, 0, 85, 5)
            ._setPosition(
                new CenterConstraint(),
                new CramSiblingConstraint(5),
            )
            ._create(this.handler.getColorScheme(), isSubCategory ? "DividerSubcategory" : "Divider")
            .setChildOf(this.rightBlock)

        return this
    }

    /**
     * - Internal use
     * - Sets unfocus on the main component of this [class] and clears the childrens
     */
    _delete() {
        this._setSelected(false)
        this.rightBlock.clearChildren()
        delete this
    }

    /**
     * @param {(Settings) => boolean} cb
     * @returns {this}
     */
    _setShouldShow(cb) {
        this._shouldShow = cb

        return this
    }

    shouldShow() {
        if (!this._shouldShow) return
        const result = this._shouldShow(this.parentClass)

        if (!result) {
            this._setSelected(false)
            this.sidebarComp.hide()
            return
        }

        this.sidebarComp.unhide(true)
    }
}

