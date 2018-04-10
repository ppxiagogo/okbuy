-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 03 月 31 日 12:00
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `haolemai`
--

-- --------------------------------------------------------

--
-- 表的结构 `bannersrc`
--

CREATE TABLE IF NOT EXISTS `bannersrc` (
  `id` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `src` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `bannersrc`
--

INSERT INTO `bannersrc` (`id`, `src`) VALUES
(1, 'http://i.okaybuy.cn/static/ebe64df3cdf1c97692a1c9866af41602.jpg'),
(2, 'http://i.okaybuy.cn/static/c49181aa16ce1d1de2a6272436016cba.jpg'),
(3, 'http://i.okaybuy.cn/static/9526937172bdd4095c007645f3d3e7fb.jpg'),
(4, 'http://i.okaybuy.cn/static/5eed54ae68c11398eab32e0aa55c3467.jpg'),
(5, 'http://i.okaybuy.cn/static/487867cd95c7a5ac782d43dde0caaa94.jpg'),
(6, 'http://i.okaybuy.cn/static/2aac128c24642a5904fd46cc5228f912.jpg'),
(7, 'http://i.okaybuy.cn/static/374e0ff8f1e7bb5587ab42e8fc46c710.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `bigshop`
--

CREATE TABLE IF NOT EXISTS `bigshop` (
  `id` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `title1` varchar(50) CHARACTER SET utf8 NOT NULL,
  `title2` varchar(50) CHARACTER SET utf8 NOT NULL,
  `title3` varchar(50) CHARACTER SET utf8 NOT NULL,
  `src` varchar(200) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=29 ;

--
-- 转存表中的数据 `bigshop`
--

INSERT INTO `bigshop` (`id`, `title1`, `title2`, `title3`, `src`) VALUES
(1, '征服自我', '唤醒原力', '89元起', 'http://i.okaybuy.cn/static/3e5b208c7c2580886eee8cbf4a0ee4b5.jpg'),
(2, '彰显态度', '潮我看', '119元起', 'http://i.okaybuy.cn/static/927c8702e3022a03d8dc3c525ca80ad5.jpg'),
(3, '实用主义', '为你折服', '29元起', 'http://i.okaybuy.cn/static/273203bbd08ae87dd6b002c0e1eb64ad.jpg'),
(4, '品位凸显', '潮适出街', '99元起', 'http://i.okaybuy.cn/static/e215f81fc18c2b19adf225df79cdc0f0.jpg'),
(5, '斯凯奇', '实在太好搭了', '两双减150', 'http://i.okaybuy.cn/static/07a0eb7e29c437a4fd5a74ccc0bc7704.jpg'),
(6, '魅力女装春夏焕新', '1件9折', '满3件7折', 'http://i.okaybuy.cn/static/5529fc093c29d752fdaf0a18c6945315.jpg'),
(7, '换季不愁', '潮搭出行', '99元起', 'http://i.okaybuy.cn/static/aeae00229a8a246e7a3ef045102ea678.jpg'),
(8, '鞋品top', '有路就“型”', '299元起', 'http://i.okaybuy.cn/static/5e558b14d22a2284fd99dc49ddf12277.jpg'),
(9, '青春活力', '满200减30满500减100', '2.5折起', 'http://i.okaybuy.cn/static/078c8fb3c87e633950c6288a975d5e26.jpg'),
(10, '青春无畏', '肆意畅跑', '3.4折起', 'http://i.okaybuy.cn/static/cbb4bd60a26b1767f736f5ead578ba57.jpg'),
(11, '【OUTLET】', '欧美范 实穿百搭', '99元起', 'http://i.okaybuy.cn/static/61ea4c335b157b6681a25f01034cb7f1.jpg'),
(12, '型格男装潮流当道', '1件9折', '2件7.5折', 'http://i.okaybuy.cn/static/16b19a08fd0446bb61ce5487dc65800c.jpg'),
(13, '百变潮街', 'LEE刻出型', '下单8.5折', 'http://i.okaybuy.cn/static/5581827cd99dccf074ec0f9efbd673ce.jpg'),
(14, '依恋品牌专场', '下单1件9折', '满3件7折', 'http://i.okaybuy.cn/static/51e4813aa6619b48187420c84ac37840.jpg'),
(15, '不惧炎热', '提前囤', '49元起', 'http://i.okaybuy.cn/static/72109380bd8ab684895c7db7edb98bd8.jpg'),
(16, '肆意挥洒享受汗水', '满100减30可累计', '29元起', 'http://i.okaybuy.cn/static/0b59dacca0b14e0a9e78935def91f390.jpg'),
(17, '茁壮乐动', '儿童专区', '89元起', 'http://i.okaybuy.cn/static/1272aa27b326a9765d80ceba10d2ab5e.jpg'),
(18, '全球潮牌特大促', '2件减200 3件减400', '3件减400', 'http://i.okaybuy.cn/static/0514b051a04ddc23434cf028ddd88c0b.jpg'),
(19, '休闲运动鞋', '下单1双9折', '满2双8折', 'http://i.okaybuy.cn/static/00bddfd05069057ccc3f8450b6d10a77.jpg'),
(20, '骆驼集团', '踏青季', '最高减100', 'http://i.okaybuy.cn/static/7680412a1bfebd7a5580ca30a4e0d1bf.jpg'),
(21, '艾格', '时尚生活季', '满3件7折', 'http://i.okaybuy.cn/static/f308e588a3ccc6fdc7aea32d8e6c7aea.jpg'),
(22, '乐斯菲斯&狼爪', '满1件9折', '满2件8折', 'http://i.okaybuy.cn/static/02d3a824dc018f2e73e254ea3cc3cb8f.jpg'),
(23, '探路者踏青出游', '1件9折', '满2件8折', 'http://i.okaybuy.cn/static/43847c09ca6fd593b3469c6847d5102b.jpg'),
(24, 'who.a.u品牌入驻', '299减100', '599减三百', 'http://i.okaybuy.cn/static/03e2cb79499cc41960ad372af213ccbd.jpg'),
(25, '花花公子', '早买早省钱', '两双减200', 'http://i.okaybuy.cn/static/461d0f09cd2352d4c9883483291d6a46.jpg'),
(26, '富贵鸟', '换季来这里就够了', '两双减150', 'http://i.okaybuy.cn/static/eff8ef15728c0e342daba12c53dbc36c.jpg'),
(27, 'tata&fed&basto', '紧跟潮流步伐', '299元3件', 'http://i.okaybuy.cn/static/a72899764ac731fb05bb760c8d89e61e.jpg'),
(28, '美包、腕表专场', '499减49 999减109', '最高减309', 'http://i.okaybuy.cn/static/e99d47194168f989c8b0ba8b5a5b728e.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `cart`
--

CREATE TABLE IF NOT EXISTS `cart` (
  `id` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) CHARACTER SET utf8 NOT NULL,
  `title` varchar(200) CHARACTER SET utf8 NOT NULL,
  `price` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `cart`
--

INSERT INTO `cart` (`id`, `url`, `title`, `price`) VALUES
(1, 'http://0.image.al.okbuycdn.com/nbn/w150_150_detect/static/d5c5d111e74afded3f1f0657051df31e.jpg', 'OFFSUN男式轻便SUN-WALK休闲健步鞋', '499');

-- --------------------------------------------------------

--
-- 表的结构 `details`
--

CREATE TABLE IF NOT EXISTS `details` (
  `id` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `src` varchar(200) CHARACTER SET utf8 NOT NULL,
  `src2` varchar(200) CHARACTER SET utf8 NOT NULL,
  `src3` varchar(200) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- 转存表中的数据 `details`
--

INSERT INTO `details` (`id`, `src`, `src2`, `src3`) VALUES
(1, 'http://0.image.al.okbuycdn.com/nbn/s59_59_crop/static/d5c5d111e74afded3f1f0657051df31e.jpg', 'http://0.image.al.okbuycdn.com/nbn/w450_450/static/a87d756e70f50aabb268b43bb88b4e96.jpg', 'http://0.image.al.okbuycdn.com/static/a87d756e70f50aabb268b43bb88b4e96.jpg'),
(2, 'http://0.image.al.okbuycdn.com/nbn/s59_59_crop/static/f46ef1e25def02a91e781d1efc88b0cc.jpg', 'http://0.image.al.okbuycdn.com/nbn/w450_450/static/0c21dcbd385333cff8d7c317759fe695.jpg', 'http://0.image.al.okbuycdn.com/static/0c21dcbd385333cff8d7c317759fe695.jpg'),
(3, 'http://0.image.al.okbuycdn.com/nbn/s59_59_crop/static/54113fad80fcb25ee63d04758b507003.jpg', 'http://0.image.al.okbuycdn.com/nbn/w450_450/static/27c71b7f04f5bc15b8209ef0ce726e43.jpg', 'http://0.image.al.okbuycdn.com/static/27c71b7f04f5bc15b8209ef0ce726e43.jpg'),
(4, 'http://0.image.al.okbuycdn.com/nbn/s59_59_crop/static/a166f02b199000ed5e1c22fbe8e35842.jpg', 'http://0.image.al.okbuycdn.com/nbn/w450_450/static/043cf90db7c62e56b6f8e23c6a720120.jpg', 'http://0.image.al.okbuycdn.com/static/043cf90db7c62e56b6f8e23c6a720120.jpg'),
(5, 'http://0.image.al.okbuycdn.com/nbn/s59_59_crop/static/910a4663dc32a42b886ff91c55b5fa20.jpg', 'http://0.image.al.okbuycdn.com/nbn/w450_450/static/63c7c4e65ee6f912fce9ce03754b8ef2.jpg', 'http://0.image.al.okbuycdn.com/static/63c7c4e65ee6f912fce9ce03754b8ef2.jpg'),
(6, 'http://0.image.al.okbuycdn.com/nbn/s59_59_crop/static/a969e76f4c0040dcce70bec6876e16de.jpg', 'http://0.image.al.okbuycdn.com/nbn/w450_450/static/a1da904414e249d0a743dc8070ddae36.jpg', 'http://0.image.al.okbuycdn.com/static/a1da904414e249d0a743dc8070ddae36.jpg'),
(7, 'http://0.image.al.okbuycdn.com/nbn/s59_59_crop/static/25f76ef0fd989e770df26999bd3edf01.jpg', 'http://0.image.al.okbuycdn.com/nbn/w450_450/static/1512fd049cf78b4a807c7b363d410b48.jpg', 'http://0.image.al.okbuycdn.com/static/1512fd049cf78b4a807c7b363d410b48.jpg'),
(8, 'http://0.image.al.okbuycdn.com/nbn/s59_59_crop/static/a2875419c4cc4e65217388ade0ca146b.jpg', 'http://0.image.al.okbuycdn.com/nbn/w450_450/static/8433b113d381c5868ff33764dbb5b52e.jpg', 'http://0.image.al.okbuycdn.com/static/8433b113d381c5868ff33764dbb5b52e.jpg'),
(9, 'http://0.image.al.okbuycdn.com/nbn/s59_59_crop/static/c4bcc782112b422ba0646da78a5e9b68.jpg', 'http://0.image.al.okbuycdn.com/nbn/w450_450/static/3b49f541aa1bd09dff7f4894d489beb4.jpg', 'http://0.image.al.okbuycdn.com/static/3b49f541aa1bd09dff7f4894d489beb4.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `login`
--

CREATE TABLE IF NOT EXISTS `login` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `tel` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `login`
--

INSERT INTO `login` (`sid`, `tel`, `password`) VALUES
(1, '15755082770', ''),
(2, '15755080820', '123456..'),
(3, '15755081516', '9f95c68e7ceff25f6596');

-- --------------------------------------------------------

--
-- 表的结构 `smallshop`
--

CREATE TABLE IF NOT EXISTS `smallshop` (
  `id` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `src` varchar(200) CHARACTER SET utf8 NOT NULL,
  `title` varchar(50) CHARACTER SET utf8 NOT NULL,
  `span` varchar(50) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- 转存表中的数据 `smallshop`
--

INSERT INTO `smallshop` (`id`, `src`, `title`, `span`) VALUES
(1, 'http://i.okaybuy.cn/static/c7665e9abe647d45cef8cdb26350f6a1.jpg', '满100减30元可累计', '35元起'),
(2, 'http://i.okaybuy.cn/static/af49b071ebe26b17926cc5cc37325550.jpg', '法国鳄鱼', '满2件8折'),
(3, 'http://i.okaybuy.cn/static/5eff3706d15c8ec110d8ea1a59b255e0.jpg', '骆驼动感想不时髦都难', '69元起'),
(4, 'http://i.okaybuy.cn/static/8d1a7b9268197ed348510f18c838bd7e.jpg', '中空鞋吸引力十足', '两双8折'),
(5, 'http://i.okaybuy.cn/static/cae24ff1e64d15adb77bc731054feedd.jpg', '尽情释放无拘束', '59元起'),
(6, 'http://i.okaybuy.cn/static/e6206c6b8adb0c731898ac6f85754a14.jpg', '上周他们都在买什么？', '口碑榜'),
(7, 'http://i.okaybuy.cn/static/168a48993f7d1fef919e22d36f1df4d3.jpg', '户外大牌', '低至1折'),
(8, 'http://i.okaybuy.cn/static/d3f6427d1bc9b32b33f13a91d0f01a1c.jpg', '童鞋专场', '3.3折起'),
(9, 'http://i.okaybuy.cn/static/fb9ac014662ac8df542e506512e97562.jpg', '不老少新品进来看呐', '300款新品'),
(10, 'http://i.okaybuy.cn/static/dc925b0fba8011dfca366685ef1d4395.jpg', '添柏岚&哥伦比亚', '2件8折'),
(11, 'http://i.okaybuy.cn/static/33ccaa4c0e09d926feb142bc2caaebb0.jpg', '木林森不能错过', '238减50'),
(12, 'http://i.okaybuy.cn/static/55884f0c4ced3d48fc5804fca1059c40.jpg', '卡帝乐鳄鱼精选爆款', '两双8折'),
(13, 'http://i.okaybuy.cn/static/b2f2e68c09d8a7d1f95496723b97539a.jpg', '星期六集团时尚女鞋', '129元起'),
(14, 'http://i.okaybuy.cn/static/55595456108b3f1a24b4e4c14f65958a.jpg', 'PRICH 潮流女装', '下单3件7折'),
(15, 'http://i.okaybuy.cn/static/d0120ba024fc5662a49d9eb624f75901.jpg', 'Gress.Dina男女鞋', '69元起');
