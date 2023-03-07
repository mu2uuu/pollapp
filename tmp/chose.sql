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
-- テーブルの構造 `chose`
--

CREATE TABLE `chose` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'ID',
  `topics_id` int(10) NOT NULL,
  `chose` varchar(30) NOT NULL,
  `agree` int(10) NOT NULL,
  `updated_by` varchar(20) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- テーブルのデータのダンプ `chose`
--

INSERT INTO `chose` (`id`, `topics_id`, `chose`, `agree`, `updated_by`, `updated_at`) VALUES
(1, 1, '払いたくない！', 3, 'admin', '2023-03-06 14:47:20'),
(2, 1, '500円', 1, 'admin', '2023-03-06 14:24:55'),
(3, 1, '1000円', 5, 'admin', '2023-03-06 14:25:04'),
(4, 1, '1500円', 3, 'admin', '2023-03-06 14:25:12'),
(5, 1, '2000円', 7, 'admin', '2023-03-06 14:25:31'),
(6, 1, 'いくらでも！', 10, 'admin', '2023-03-06 14:25:39'),
(7, 2, '晴れ', 1, 'admin', '2023-03-06 14:25:23'),
(8, 2, '曇り', 2, 'admin', '2023-03-06 14:24:28'),
(9, 2, '雨', 5, 'admin', '2023-03-06 14:24:28');

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `chose`
--
ALTER TABLE `chose`
  ADD PRIMARY KEY (`id`);

--
-- ダンプしたテーブルの AUTO_INCREMENT
--

--
-- テーブルの AUTO_INCREMENT `chose`
--
ALTER TABLE `chose`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID', AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
