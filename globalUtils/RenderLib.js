

export const drawLine = (x1, y1, z1, x2, y2, z2, red, green, blue, alpha, phase, lineWidth) => {
    if (!lineWidth) lineWidth = 2.0;
    GlStateManager.func_179094_E(); // pushMatrix
    GL11.glLineWidth(lineWidth);
    GL11.glDisable(GL11.GL_CULL_FACE); // disableCullFace
    GL11.glEnable(GL11.GL_BLEND); // enableBlend
    GL11.glBlendFunc(770, 771); // blendFunc
    GL11.glDisable(GL11.GL_TEXTURE_2D); // disableTexture2D
    GL11.glDepthMask(false); // depthMask

    if (phase) {
        GL11.glDisable(GL11.GL_DEPTH_TEST); // disableDepth
    }

    Tessellator.begin(3)
        .colorize(red, green, blue, alpha)
        .pos(x1, y1, z1)
        .pos(x2, y2, z2)
        .draw();


    GL11.glEnable(GL11.GL_CULL_FACE); // enableCull
    GL11.glDisable(GL11.GL_BLEND); // disableBlend
    GL11.glDepthMask(true); // depthMask
    GL11.glEnable(GL11.GL_TEXTURE_2D); // enableTexture2D
    if (phase) {
        GL11.glEnable(GL11.GL_DEPTH_TEST); // enableDepth
    }

    GlStateManager.func_179121_F(); // popMatrix
}

export const renderBoxOutlineFromCorners = (x0, y0, z0, x1, y1, z1, r, g, b, a, lineWidth=2, phase=false) => {Tessellator.pushMatrix()
    GL11.glLineWidth(lineWidth);Tessellator.begin(3);Tessellator.depthMask(false);Tessellator.disableTexture2D();Tessellator.enableBlend()

    if (phase) Tessellator.disableDepth()
    Tessellator.colorize(r, g, b, a)

    Tessellator.pos(x0, y0, z0).tex(0, 0);Tessellator.pos(x0, y0, z1).tex(0, 0);Tessellator.pos(x0, y1, z1).tex(0, 0);Tessellator.pos(x1, y1, z1).tex(0, 0)
    Tessellator.pos(x1, y1, z0).tex(0, 0);Tessellator.pos(x0, y1, z0).tex(0, 0);Tessellator.pos(x0, y0, z0).tex(0, 0);Tessellator.pos(x1, y0, z0).tex(0, 0)
    Tessellator.pos(x1, y0, z1).tex(0, 0);Tessellator.pos(x0, y0, z1).tex(0, 0);Tessellator.pos(x0, y1, z1).tex(0, 0);Tessellator.pos(x0, y1, z0).tex(0, 0)
    Tessellator.pos(x1, y1, z0).tex(0, 0);Tessellator.pos(x1, y0, z0).tex(0, 0);Tessellator.pos(x1, y0, z1).tex(0, 0);Tessellator.pos(x1, y1, z1).tex(0, 0)
    Tessellator.draw()
    
    if (phase) Tessellator.enableDepth()

    Tessellator.enableTexture2D();Tessellator.disableBlend();Tessellator.depthMask(true);Tessellator.popMatrix()
}

export const renderBoxOutline = (x, y, z, w, h, r, g, b, a, lineWidth=2, phase=false) => {
    renderBoxOutlineFromCorners(x-w/2, y, z-w/2, x+w/2, y+h, z+w/2, r, g, b, a, lineWidth, phase)
}

export const drawInnerEspBox = (x, y, z, w, h, red, green, blue, alpha, phase=false) => {
    Tessellator.pushMatrix();
    GL11.glLineWidth(2.0);
    GlStateManager.func_179129_p(); // disableCullFace
    GlStateManager.func_179147_l(); // enableBlend
    GlStateManager.func_179112_b(770, 771); // blendFunc
    GlStateManager.func_179132_a(false); // depthMask
    GlStateManager.func_179090_x(); // disableTexture2D

    w /= 2;

    Tessellator.begin(GL11.GL_QUADS, false);
    Tessellator.colorize(red, green, blue, alpha);

    Tessellator.translate(x, y, z)
        .pos(w, 0, w)
        .pos(w, 0, -w)
        .pos(-w, 0, -w)
        .pos(-w, 0, w)

        .pos(w, h, w)
        .pos(w, h, -w)
        .pos(-w, h, -w)
        .pos(-w, h, w)

        .pos(-w, h, w)
        .pos(-w, h, -w)
        .pos(-w, 0, -w)
        .pos(-w, 0, w)

        .pos(w, h, w)
        .pos(w, h, -w)
        .pos(w, 0, -w)
        .pos(w, 0, w)

        .pos(w, h, -w)
        .pos(-w, h, -w)
        .pos(-w, 0, -w)
        .pos(w, 0, -w)

        .pos(-w, h, w)
        .pos(w, h, w)
        .pos(w, 0, w)
        .pos(-w, 0, w)
        .draw();

    GlStateManager.func_179089_o(); // enableCull
    GlStateManager.func_179084_k(); // disableBlend
    GlStateManager.func_179132_a(true); // depthMask
    GlStateManager.func_179098_w(); // enableTexture2D
            
    Tessellator.popMatrix();
};