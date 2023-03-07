-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- ホスト: localhost:8889
-- 生成日時: 2023 年 3 月 08 日 01:04
-- サーバのバージョン： 5.7.34
-- PHP のバージョン: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- データベース: `tmp_pollapp`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `comment`
--

CREATE TABLE `comment` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'ID',
  `topics_id` int(10) NOT NULL,
  `chose` varchar(30) NOT NULL,
  `comment` varchar(30) NOT NULL,
  `updated_by` varchar(20) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- テーブルのデータのダンプ `comment`
--

INSERT INTO `comment` (`id`, `topics_id`, `chose`, `comment`, `updated_by`, `updated_at`) VALUES
(1, 1, '500円', 'PS4がほしいな', 'admin', '2023-03-06 14:32:05'),
(2, 1, '1000円', 'PS5が欲しい', 'admin', '2023-03-06 14:32:05'),
(3, 1, 'いくらでも！', 'PS1最高', 'admin', '2023-03-06 14:32:05'),
(4, 1, '500円', 'VRしたい！', 'guest', '2023-03-06 14:50:54');

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- ダンプしたテーブルの AUTO_INCREMENT
--

--
-- テーブルの AUTO_INCREMENT `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID', AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
