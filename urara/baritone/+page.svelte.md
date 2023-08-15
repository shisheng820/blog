---
title: 'Baritone 机器人：Minecraft的辅助性机器人'
image: '/baritone/baritone.webp'
created: 2023-08-15
updated: 2023-08-15
publish: 2023-08-15
tags:
  - 'Minecraft'
  - 'Baritone'
---

<script>
  import GitHub from '$lib/components/extra/github.svelte'
</script>

大家好！今天我要向大家介绍一款强大的 Minecraft 机器人——Baritone。它是一个基于寻路功能的机器人，可以帮助你完成各种任务，比如采矿、建筑

Baritone下载地址请访问Github链接: 
<GitHub user="cabaletta" repo="baritone"/>
Baritone对forge和fabric都支持的。

那么Baritone能干啥呢？Baritone最核心的功能是寻路，其他功能如采矿、建筑等等都是基于寻路这个核心功能展开的。通常安装Baritone最简单的方法是安装Impact（一款MC辅助，里面集成了Baritone的功能，当然也包括辅助应该有的比如杀戮光环等等功能）；如果追求简洁也可以点上面给的链接，去github下载jar文件，就相当于装mod了。作者github里release发布的文件对应哪个MC版本，标注得很清楚。

好，下面我们正式开始~

 

## 一、指令前缀

Baritone怎么使用呢？就和MC原版指令类似，在聊天框里输入相应的指令就好了。不过MC的原版指令前缀是【/】,Baritone默认的指令前缀则是【#】。如果你用的是Impact客户端，也可以用【.b】

 

## 二、实用功能

在介绍功能之前，我们首先需要记住一个指令，那就是帮助指令【#help】。当想查询一个指令时，比如想知道【#sel】怎么用，就可以【#help sel】查找。而且【#help】里还可以用鼠标点击翻页和查看，是不是非常方便！

下面介绍基本指令，个人比较懒就不加前缀了，大家用的时候别忘了加奥。每个指令的后面我会介绍功能，比较重要的指令会根据我自己的经验多说两句。

【thisway 1000】设置一个往你面对的方向走一千格距离的目标。

【path】行动。设定目标后需要这个指令才能动起来。

【invert】远离目标，会使你离目标越来越远。

【goal】将当前位置设定为目标地点（比如你离开之后就可以用【path】准确回来了）

【goal x y z】或【goal x z】或【goal y】设置目标为一个给定的坐标

【goal clear】清除之前设置的目标地点

【goto x y z】或【goto x z】或【goto y】立即前往给定的坐标。这个指令相当于【goal】和【path】二合一了

【cancel】或【stop】终止当前行动

【pause】暂停当前行动（和终止不同，暂停还能继续，终止就完全结束了）

【resume】继续之前暂停的行动

【goto 方块】前往最近的给定的方块。比如【goto portal】，是前往最近的传送门。【goto ender_chest】，是寻找最近的末影箱。注意参数必须是方块类型，比如你去找小麦种子或者钻石剑，他就会报错

【mine 方块】重点功能！采集给定的方块。我之前的文章中mine翻译成采矿，但其实只要是属于方块类型都可以开采，不仅仅包含矿物。例如，你可以【mine diamond_ore】，自动挖钻石矿；也可以【mine bubble_ore】，自动采集珊瑚。如果对采集数量有要求，就在方块前面加上数字，【mine 数量 方块】，比如采集64个钻石矿，就是【mine 64 diamond_ore】。在服务器里使用这功能一般都是作弊的，但咱又不想自己动手，怎么办呢？这时候打开采集限制功能，【legitMine true】，这时候你只能挖眼前能看到的东西，挖出来的矿道形状就像你在随机挖掘，就掩盖作弊嫌疑了**。

【click】赋予鼠标指令功能。这时候左键单击方块，你就会站进方块里面；右键单击方块，就会站到方块上面，相当于不用wasd控制人物，而是鼠标点哪里就可以去哪里。鼠标左键按住并拖拽相当于【sel】功能，选出一定的范围。

【sel】系列功能。重要功能！用于选定区域和对选定区域的处理。配合灵魂出窍比较好用，【sel 1】【sel 2】可以通过选定两顶点框定一个长方体区域，其中选定一点时该点为玩家本人所在的位置。也可以指定坐标，如【sel 1 x y z】。【sel clear】取消选区。【sel set/fill 指定方块】将选区内填充满指定方块，如果选区内原来有非指定方块占位的话会挖掉再放指定方块。【sel replace 被替换方块 指定方块】，将区域内被替换方块替换成指定方块。【sel cleararea】清空这片选区，就是把这片区域挖空。此外还有好多功能，大家可以在游戏里查看。

【follow player 玩家姓名】跟随指定玩家。【follow players】跟随指定范围内的任意玩家（一般和杀戮光环功能配合使用=-=效果你懂得）。【follow entity 生物种类】，跟随指定种类的生物。【follow entities】跟随任意生物。

【wp】路径点功能。【wp s/save 名称】建立名为指定名称的路径点，【wp goto 名称】前往给定名称的路径点。感觉这个功能挺实用的，还可以分类贴标签等等，更多功能可以用【help wp】在游戏里看。

【build】系列功能，重点功能！根据工程文件自动建筑。首先你要有一个工程文件（文件后缀为.schematic），并且该文件放在schematic文件夹中，才能让Baritone机器人自动帮你建筑。工程文件可以用一些软件导出，我记得的好像有mcedit、创世神。【build 文件名】就可以开始建造了，建造的建筑以你所处位置为基点。你也可以【build 文件名x y z】手动设置基点。关于自动建筑有很多地方需要自己配置，比如建筑从上往下还是从下往上等等，具体配置可以看我的另一篇文章baritone的进阶配置。

【schematica】建造已经打开的工程文件

【tunnel】挖掘隧道，默认一个宽两个高（刚好容一个steve通过）。【tunnel 高度 宽度 长度】可以挖掘自定义长宽高的隧道（其实就是个长方体了）。注意某些必要情况下挖掘的隧道可能会偏移直线，比如为了避开岩浆。

【farm】自动收获、种植作物，或者用骨粉催熟作物。【farm 范围半径】收货指定范围内的农作物。

【explore x z】从给定坐标处向最近的没去过的区块探图，没给坐标就默认从玩家当前位置开始探。

【come】一般配合灵魂出窍使用，让机器人前往你当前灵魂出窍所在位置

【blacklist】在行动时使用，排除最近的目标。比如现在一个传送门离你100格远，一个传送门离你500格远，你用【goto portal】前往传送门。则使用【blacklist】会把离你最近的100格的传人门排除掉，而是前往500格远的那个。

【find】寻找方块。（简单但实用的功能）

【surface】或【top】前往表面，一般在洞穴里回地表的时候很实用。

 

## 三、实用配置

Baritone机器人还能够自己进行一些偏好设置，这些配置足有上百条，在另一篇文章进阶配置里我会相加罗列。不过这里先挑出来一些实用的、有意思的设置出来。怎么进行设置呢？跟原版指令用法相同，就是个参数的事。

【allowBreak】是否允许破坏方块。默认是打开的。一般baritone规划最佳路线的时候，可能会挖掉路线上的一些方块什么的。有特殊情况不想破坏方块的话，可以【allowBreak false】，否则就是true。

【allowSprint】是否允许疾跑。看你是想节省饱食度还是想节省时间咯。

【allowPlace】是否允许放置方块。有时候机器人寻路也会放置方块追求路线最优。

【allowParkour】是否允许跑酷。对，就是平时MC里的那个跑酷。但作者亲自提醒说，这个跑酷功能不是很可靠。

【allowParkourPlace】是否允许跑酷中放置方块。显然更危险了。

【blockPlacementPenalty】设置方块放置时间间隔，就是机器人放两个方块至少要过多长时间，以tick为单位，默认是20ticks。设置更高的间隔可以使机器人规划路线时尽量省着放方块。

【renderCachedChunks】是否将已缓存的区块渲染为半透明。是个很有意思的配置，在低视距的服务器上很有用！打开这个功能后，需要重新加载一下世界（比如重新连接，或者进出传送门，或者死亡重生等等），这样就可以成功渲染了。不过这个功能比较费cpu，同时帧率PPT警告（电脑的考验时间到了！）注意流水在渲染出来后会看上去是岩浆，固体在在主世界渲染成石头，地狱里是地狱岩，末地是末地石。【cachedChunksOpacity】用来调整透明度。另外开Optifine的话这功能是无效的。

【avoidance】是否避开怪物以及刷怪笼。（很实用！我之前挂机寻路总是迎面撞上怪也不知道躲开，就是因为不知道有这个功能）

【legitMine】是否合规挖矿（不开启透视）。开了透视一旦被抓到，挖矿的矿道就是如山铁证。但开启合规挖矿功能后，你挖矿的痕迹就像正常人一样。

【followRadius】设置跟随半径，是对上文【follow】功能的配置。

【backfill】是否堵上背后挖掘的隧道。防止泄露踪迹。

【buildInLayers】是否严格按层数建造。开启后将严格按层数建造，这层只要有一个方块不建完就不会开始下一层。是对【build】功能的配置。另外【layerOrder】，建造方向，true是从上往下建造，false是从下往上建造。

【buildRepeat a,b,c】在距离多远处重复建造。其中a、b、c分别代表重复建造的位置距离基点在x、y、z轴上的偏移量，默认(0，0，0)就是不重复建造。【buildRepeatCount】重复建造几次，-1是无限次。

【worldExploringChunkOffset】设置探图时区块偏移量，把这个偏移量设置成渲染距离可以让加载更有效率。（虽然确实如此，但谁会在意这点加再效率呢）

【acceptableThrowawayItems】一次性使用物名单，一次性使用物指比如圆石这样用来搭路、搭桥并且搭完就扔下不管的东西（富人建议把绿宝石块加入名单）

【blocksToavoidBreaking】不可破坏物名单，免得被机器人不小心破坏掉。

【mineScanDroppedItems】采集是否考虑掉落物。默认的采集在扫描时是不考虑本来就在地上的掉落物的（挖完掉到地上才变成掉落物的不算）。

【allowDiagonalAscend】是否允许斜着跳到上一层的方块。作者说挺安全的，比斜着下还安全。

## 常用指令（示例）
挖掘绿宝石（包括深层）
```
#mine emerald_ore deepslate_emerald_ore
```
停止
```
#stop
```
挖掘原木
```
#mine spruce_log oak_log birch_log jungle_log acacia_log dark_oak_log
```
挖掘石头
```
#mine stone
```
挖掘铁矿石（包括深层）
```
#mine iron_ore deepslate_iron_ore
```
煤（包括深层）
```
#mine coal_ore deepslate_coal_ore
```
挖掘钻石（包括深层）
```
#mine diamond_ore deepslate_diamond_ore
```
挖掘青金石矿石（包括深层）
```
#mine lapis_ore deepslate_lapis_ore
```