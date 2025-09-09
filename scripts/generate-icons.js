const fs = require('fs')
const path = require('path')

// 创建图标目录
const iconsDir = path.join(__dirname, '../public/icons')
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true })
}

// 图标尺寸配置
const iconSizes = [16, 32, 72, 96, 128, 144, 152, 192, 384, 512]

// 生成图标HTML模板
const generateIconHTML = () => {
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>创合矩阵图标生成器</title>
  <style>
    body {
      margin: 0;
      padding: 20px;
      font-family: Arial, sans-serif;
      background: #f5f5f5;
    }
    .icon-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }
    .icon-item {
      text-align: center;
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .icon {
      border-radius: 20%;
      margin-bottom: 10px;
    }
    .size-label {
      font-size: 12px;
      color: #666;
    }
  </style>
</head>
<body>
  <h1 style="text-align: center; color: #7c3aed;">创合矩阵 - 图标预览</h1>
  <div class="icon-container">
    ${iconSizes.map(size => `
      <div class="icon-item">
        <svg class="icon" width="${size}" height="${size}" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#7c3aed;stop-opacity:1" />
              <stop offset="50%" style="stop-color:#3b82f6;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="qGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#f8fafc;stop-opacity:1" />
            </linearGradient>
          </defs>
          
          <circle cx="256" cy="256" r="240" fill="url(#bgGradient)" stroke="#ffffff" stroke-width="8"/>
          
          <g transform="translate(256, 256)">
            <path d="M -60 -40 Q -60 -80 -20 -80 Q 20 -80 20 -40 Q 20 0 20 40 Q 20 80 -20 80 Q -60 80 -60 40 Q -60 0 -60 -40 Z" 
                  fill="url(#qGradient)" 
                  stroke="#ffffff" 
                  stroke-width="4"/>
            
            <path d="M 20 20 L 50 50 L 40 60 L 10 30 Z" 
                  fill="url(#qGradient)" 
                  stroke="#ffffff" 
                  stroke-width="4"/>
          </g>
        </svg>
        <div class="size-label">${size}x${size}</div>
      </div>
    `).join('')}
  </div>
  
  <div style="text-align: center; margin-top: 40px; color: #666;">
    <p>请右键保存每个图标为PNG格式，并重命名为对应的尺寸</p>
    <p>例如：icon-192x192.png, icon-512x512.png 等</p>
  </div>
</body>
</html>
  `
  
  fs.writeFileSync(path.join(__dirname, '../public/icon-generator.html'), html)
  console.log('图标生成器已创建：public/icon-generator.html')
  console.log('请在浏览器中打开该文件，然后保存各个尺寸的图标')
}

// 创建快捷方式图标
const generateShortcutIcons = () => {
  const shortcuts = [
    { name: 'talent', color: '#10b981' },
    { name: 'chat', color: '#f59e0b' }
  ]
  
  shortcuts.forEach(shortcut => {
    const svg = `
<svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${shortcut.color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${shortcut.color}dd;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="96" height="96" rx="20" fill="url(#bgGradient)"/>
  
  ${shortcut.name === 'talent' ? `
    <circle cx="48" cy="35" r="12" fill="white" opacity="0.9"/>
    <rect x="36" y="50" width="24" height="8" rx="4" fill="white" opacity="0.9"/>
    <rect x="40" y="62" width="16" height="6" rx="3" fill="white" opacity="0.7"/>
  ` : `
    <circle cx="48" cy="35" r="12" fill="white" opacity="0.9"/>
    <path d="M 30 50 Q 48 40 66 50 Q 48 60 30 50 Z" fill="white" opacity="0.9"/>
    <circle cx="42" cy="45" r="2" fill="white"/>
    <circle cx="54" cy="45" r="2" fill="white"/>
  `}
</svg>
    `
    
    fs.writeFileSync(path.join(iconsDir, `shortcut-${shortcut.name}.svg`), svg)
  })
  
  console.log('快捷方式图标已生成')
}

// 执行生成
generateIconHTML()
generateShortcutIcons()

console.log('\n图标生成完成！')
console.log('请按照以下步骤完成图标设置：')
console.log('1. 在浏览器中打开 public/icon-generator.html')
console.log('2. 右键保存每个尺寸的图标为PNG格式')
console.log('3. 将PNG文件重命名并放入 public/icons/ 目录')
console.log('4. 确保文件名格式为：icon-{size}x{size}.png')
