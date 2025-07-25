const renderBoxOutlineFromCorners = (x0, y0, z0, x1, y1, z1, r, g, b, a, lineWidth = 2, phase = true) => {
    Tessellator.pushMatrix()
    GL11.glLineWidth(lineWidth)
    Tessellator.begin(3)
    Tessellator.depthMask(false)
    Tessellator.disableTexture2D()
    Tessellator.enableBlend()

    if (phase) Tessellator.disableDepth()
    Tessellator.colorize(r, g, b, a)

    Tessellator.pos(x0, y0, z0).tex(0, 0)
    Tessellator.pos(x0, y0, z1).tex(0, 0)
    Tessellator.pos(x0, y1, z1).tex(0, 0)
    Tessellator.pos(x1, y1, z1).tex(0, 0)
    Tessellator.pos(x1, y1, z0).tex(0, 0)
    Tessellator.pos(x0, y1, z0).tex(0, 0)
    Tessellator.pos(x0, y0, z0).tex(0, 0)
    Tessellator.pos(x1, y0, z0).tex(0, 0)
    Tessellator.pos(x1, y0, z1).tex(0, 0)
    Tessellator.pos(x0, y0, z1).tex(0, 0)
    Tessellator.pos(x0, y1, z1).tex(0, 0)
    Tessellator.pos(x0, y1, z0).tex(0, 0)
    Tessellator.pos(x1, y1, z0).tex(0, 0)
    Tessellator.pos(x1, y0, z0).tex(0, 0)
    Tessellator.pos(x1, y0, z1).tex(0, 0)
    Tessellator.pos(x1, y1, z1).tex(0, 0)
    Tessellator.draw()

    if (phase) Tessellator.enableDepth()

    Tessellator.enableTexture2D()
    Tessellator.disableBlend()
    Tessellator.depthMask(true)
    Tessellator.popMatrix()
}

export const renderBoxOutline = (x, y, z, w, h, r, g, b, a, lineWidth = 2, phase = true) => {
    renderBoxOutlineFromCorners(x - w / 2, y, z - w / 2, x + w / 2, y + h, z + w / 2, r, g, b, a, lineWidth, phase)
}
