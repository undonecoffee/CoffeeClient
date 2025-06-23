export default class RenderLib {
    static drawLine = (x1, y1, z1, x2, y2, z2, red, green, blue, alpha, phase, lineWidth) => {
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
    };
};