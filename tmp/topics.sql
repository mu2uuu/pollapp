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
-- テーブルの構造 `topics`
--

CREATE TABLE `topics` (
  `topics_id` int(10) UNSIGNED NOT NULL COMMENT 'トピックID',
  `title` varchar(30) NOT NULL,
  `updated_by` varchar(20) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- テーブルのデータのダンプ `topics`
--

INSERT INTO `topics` (`topics_id`, `title`, `updated_by`, `updated_at`) VALUES
(1, 'ビンゴの景品代、いくらまでならありですか？', 'admin', '2023-03-05 14:42:20'),
(2, '明日の天気はどうでしょう？', 'admin', '2023-03-06 14:21:31');

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `topics`
--
ALTER TABLE `topics`
  ADD PRIMARY KEY (`topics_id`);

--
-- ダンプしたテーブルの AUTO_INCREMENT
--

--
-- テーブルの AUTO_INCREMENT `topics`
--
ALTER TABLE `topics`
  MODIFY `topics_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'トピックID', AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
