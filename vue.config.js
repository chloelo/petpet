// 該檔案生成的方式可以在 Vue Ui 中的「設定」->「Vue Cli」->「公開路徑」找到。
module.exports = {
  // 預設狀況下，部署到 GitHub Pages 可能會無法顯示畫面
  // 因此需要多設置該屬性
  // 官方文件：https://cli.vuejs.org/zh/config/#publicpath
  publicPath: './',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      const [obj] = args;
      obj.title = 'PETPET';
      obj.meta = {
        keywords: 'Vue, JavaScript, 電商網站',
        description: 'PETPET, 寵物電商',
      };
      // obj.icon = '123.png';
      return args;
    });
  },
};
