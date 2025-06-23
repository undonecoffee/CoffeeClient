// register("renderOverlay", () => new Text("&etest!", 400, 230).setShadow(true).draw())
export default class gui {
    constructor(file, data, settings, guiName, testTitle, toggle, isMoveable = true) {
        this.file = file;
        this.guiName = guiName;
        this.inGui = false;
        this.guiWasOn = false;
        this.x = data.x ?? Renderer.screen.getWidth() / 2;
        this.y = data.y ?? Renderer.screen.getHeight() / 2 + 30;
        this.scale = data.scale ?? 1;
        this.title = data.title ?? " ";
        this.storedTitle = this.title;
        this.align = data.align ?? "center";
        this.displayMode = false;
        this.gui = register("renderOverlay", () => {
            new Text(this.title, Renderer.screen.getWidth() * this.x, Renderer.screen.getHeight() * this.y).setShadow(true)
                .setScale(this.scale).setAlign(this.align).draw();
            let displayModeText = new Text(
                "Use the arrow keys to move one pixel at a time",
                Renderer.screen.getWidth() / 2,
                Renderer.screen.getHeight() / 2 + 5,
            ).setShadow(true).setScale(1).setAlign(this.align);
            if (this.displayMode) displayModeText.draw();
        }).unregister();
        toggle ? this.on() : this.off();

        const updateScale = (increment) => this.scale = data.scale = +(this.scale + increment).toFixed(2);
        const updatePosition = (x, y) => {
            if (x) this.x = data.x = +(x / Renderer.screen.getWidth()).toFixed(5);
            if (y) this.y = data.y = +(y / Renderer.screen.getHeight()).toFixed(5);
        };

        this.guiDragged = register("dragged", (dx, dy, x, y, bn) => {
            if (bn !== 2) {
                updatePosition(x, y);
            }
        }).unregister();

        this.guiScrolled = register("scrolled", (x, y, dir) => updateScale(dir === 1 ? 0.05 : -0.05)).unregister();

        this.guiClicked = register("guiMouseClick", (x, y, bn) => {
            if (bn !== 2) return;
            updatePosition(Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 2 + 30);
            this.scale = data.scale = 1;
        }).unregister();

        this.guiKey = register("guiKey", (keypressed, keycode) => {
            switch (keycode) {
                case 200:
                    return data.y = this.y -= parseFloat((1 / Renderer.screen.getHeight()).toFixed(5));
                case 208:
                    return data.y = this.y += parseFloat((1 / Renderer.screen.getHeight()).toFixed(5));
                case 203:
                    return data.x = this.x -= parseFloat((1 / Renderer.screen.getWidth()).toFixed(5));
                case 205:
                    return data.x = this.x += parseFloat((1 / Renderer.screen.getWidth()).toFixed(5));
            }
        }).unregister();
        if (isMoveable) {
            register("step", () => {
                if (settings[guiName].isOpen()) {
                    this.inGui = true;
                    this.moveGuiOn(testTitle);
                } else if (this.inGui) {
                    this.inGui = false;
                    this.moveGuiOff();
                }
            }).setFps(2);
        }
    }

    on() {
        this.guiWasOn = true;
        if (this.displayMode) return;
        this.gui.register();
    }

    off() {
        this.guiWasOn = false;
        if (this.displayMode) return;
        this.gui.unregister();
    }

    text(text) {
        if (this.displayMode) return;
        this.title = text;
        this.storedTitle = text;
    }

    save() {
        this.file[this.guiName].x = this.x;
        this.file[this.guiName].y = this.y;
        this.file[this.guiName].scale = this.scale;
        this.file.save();
    }

    timeOn(time) {
        this.on();
        setTimeout(() => this.off(), time);
    }

    changeTestTitle(changed) {
        this.testTitle = changed;
    }

    move(x, y, scale) {
        this.x = x;
        this.y = y;
        this.scale = scale;
    }

    moveGuiOn(testTitle) {
        this.on();
        this.displayMode = true;
        this.title = testTitle;
        this.guiDragged.register();
        this.guiScrolled.register();
        this.guiClicked.register();
        this.guiKey.register();
    }

    moveGuiOff() {
        this.save();
        this.displayMode = false;
        this.guiWasOn ? this.on() : this.off();
        this.title = this.storedTitle;
        this.guiDragged.unregister();
        this.guiScrolled.unregister();
        this.guiClicked.unregister();
        this.guiKey.unregister();
    }
}

export class moveableGui {
    emptyMovGui = new Gui();
    constructor(file) {
        this.file = file;
        this.inGui = false;
        this.x = 0.5;
        this.y = 0.5;
        this.scale = 1;
        this.title = " ";
        this.initGuis();
    }

    initGuis() {
        this.gui = register("renderOverlay", () => {
            new Text(this.title, Renderer.screen.getWidth() * this.x, Renderer.screen.getHeight() * this.y).setShadow(true)
                .setScale(this.scale).setAlign("center").draw();
            new Text(
                "Use the arrow keys to move one pixel at a time",
                Renderer.screen.getWidth() / 2,
                Renderer.screen.getHeight() / 2 + 5,
            ).setShadow(true).setScale(1).setAlign("center").draw();
        }).unregister();

        const updateScale = (increment) => this.scale = this.editfile.scale = +(this.scale + increment).toFixed(2);
        const updatePosition = (x, y) => {
            if (x) this.x = this.editfile.x = +(x / Renderer.screen.getWidth()).toFixed(5);
            if (y) this.y = this.editfile.y = +(y / Renderer.screen.getHeight()).toFixed(5);
        };

        this.guiDragged = register("dragged", (dx, dy, x, y, bn) => {
            if (bn !== 2) {
                updatePosition(x, y);
            }
        }).unregister();

        this.guiScrolled = register("scrolled", (x, y, dir) => updateScale(dir === 1 ? 0.05 : -0.05)).unregister();

        this.guiClicked = register("guiMouseClick", (x, y, bn) => {
            if (bn !== 2) return;
            updatePosition(Renderer.screen.getWidth() / 2, Renderer.screen.getHeight() / 2 + 30);
            this.scale = this.editfile.scale = 1;
        }).unregister();

        this.guiKey = register("guiKey", (keypressed, keycode) => {
            switch (keycode) {
                case 200:
                    return this.editfile.y = this.y -= parseFloat((1 / Renderer.screen.getHeight()).toFixed(5));
                case 208:
                    return this.editfile.y = this.y += parseFloat((1 / Renderer.screen.getHeight()).toFixed(5));
                case 203:
                    return this.editfile.x = this.x -= parseFloat((1 / Renderer.screen.getWidth()).toFixed(5));
                case 205:
                    return this.editfile.x = this.x += parseFloat((1 / Renderer.screen.getWidth()).toFixed(5));
            }
        }).unregister();

        this.checkGui = register("step", () => {
            if (!this.emptyMovGui.isOpen() && this.inGui) {
                this.inGui = false;
                this.moveGuiOff();
            }
        }).setFps(6).unregister();
    }

    on() {
        this.gui.register();
    }

    off() {
        this.gui.unregister();
    }

    moveGuiOn(testTitle, data) {
        this.on();
        this.inGui = true;
        this.editfile = data;
        this.x = this.editfile.x;
        this.y = this.editfile.y;
        this.scale = this.editfile.scale;
        this.emptyMovGui.open();
        this.title = testTitle;
        this.guiDragged.register();
        this.guiScrolled.register();
        this.guiClicked.register();
        this.guiKey.register();
        setTimeout(() => this.checkGui.register(), 500);
    }

    moveGuiOff(close) {
        this.off();
        this.file.save();
        this.guiDragged.unregister();
        this.guiScrolled.unregister();
        this.guiClicked.unregister();
        this.guiKey.unregister();
        this.checkGui.unregister();
    }
}
