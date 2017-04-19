/*
Navicat MySQL Data Transfer

Source Server         : Wamp
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : testes

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-04-19 10:32:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for curso
-- ----------------------------
DROP TABLE IF EXISTS `curso`;
CREATE TABLE `curso` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(120) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of curso
-- ----------------------------
INSERT INTO `curso` VALUES ('1', 'Angular 2');
INSERT INTO `curso` VALUES ('2', 'PHP');
INSERT INTO `curso` VALUES ('3', 'Laravel');
INSERT INTO `curso` VALUES ('4', 'Angular 1');
INSERT INTO `curso` VALUES ('5', 'Javascript');
INSERT INTO `curso` VALUES ('6', 'TypeScript');
INSERT INTO `curso` VALUES ('7', 'NodeJS');
INSERT INTO `curso` VALUES ('8', 'Java');
INSERT INTO `curso` VALUES ('9', 'HTML');
INSERT INTO `curso` VALUES ('10', 'CSS');
INSERT INTO `curso` VALUES ('11', 'C#');
INSERT INTO `curso` VALUES ('12', 'Unity');
INSERT INTO `curso` VALUES ('13', 'React');
INSERT INTO `curso` VALUES ('14', 'React Native');

-- ----------------------------
-- Table structure for curso_user
-- ----------------------------
DROP TABLE IF EXISTS `curso_user`;
CREATE TABLE `curso_user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `curso_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk1_curso_user` (`user_id`),
  KEY `fk2_curso_user` (`curso_id`),
  CONSTRAINT `fk1_curso_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk2_curso_user` FOREIGN KEY (`curso_id`) REFERENCES `curso` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of curso_user
-- ----------------------------
INSERT INTO `curso_user` VALUES ('1', '1', '1');
INSERT INTO `curso_user` VALUES ('2', '1', '2');
INSERT INTO `curso_user` VALUES ('3', '1', '3');
INSERT INTO `curso_user` VALUES ('4', '1', '4');
INSERT INTO `curso_user` VALUES ('5', '1', '5');
INSERT INTO `curso_user` VALUES ('6', '1', '6');
INSERT INTO `curso_user` VALUES ('7', '1', '7');
INSERT INTO `curso_user` VALUES ('8', '1', '8');
INSERT INTO `curso_user` VALUES ('9', '1', '9');
INSERT INTO `curso_user` VALUES ('10', '1', '10');
INSERT INTO `curso_user` VALUES ('11', '1', '11');

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES ('1', '2014_10_12_000000_create_users_table', '1');
INSERT INTO `migrations` VALUES ('2', '2014_10_12_100000_create_password_resets_table', '1');

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of password_resets
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'henrique weiand', 'henriqueweiand@gmail.com', '$2a$06$q0KTAAgKe7elauH90HCTeuPLtq6BVVx9Ramw02u0QDDTytPmZlMGG', null, null, null);
