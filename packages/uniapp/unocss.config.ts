import { defineConfig, presetIcons } from 'unocss';
import {
  presetApplet,
  presetRemRpx,
  transformerApplet,
} from 'unocss-applet';

export default defineConfig({
  presets: [
    presetApplet(),
    presetRemRpx(),
    presetIcons({
      // 其他选项
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),
  ],
  transformers: [
    transformerApplet(),
  ],
});
