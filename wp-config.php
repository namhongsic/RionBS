<?php

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the installation.

 * You don't have to use the web site, you can copy this file to "wp-config.php"

 * and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * Database settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://wordpress.org/documentation/article/editing-wp-config-php/

 *

 * @package WordPress

 */


// ** Database settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', 'bitnami_wordpress' );


/** Database username */

define( 'DB_USER', 'bn_wordpress' );


/** Database password */

define( 'DB_PASSWORD', '1277873a0efd2c7c2c61dd3149c1416e4e5f4a51700a7aa66b24aa3c5027cf0f' );


/** Database hostname */

define( 'DB_HOST', '127.0.0.1:3306' );


/** Database charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8' );


/** The database collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );


/**#@+

 * Authentication unique keys and salts.

 *

 * Change these to different unique phrases! You can generate these using

 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.

 *

 * You can change these at any point in time to invalidate all existing cookies.

 * This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define( 'AUTH_KEY',         'T&IvMCz=ByatzvP=m[:JgCpYFB%c0;nq,0%R,zq9{0d*;b7J6@`N{Qu`7sWdbN~I' );

define( 'SECURE_AUTH_KEY',  'xNbD/IEeQ$`=_AA>>}D+JZR08W7T<csN ykUAP?;BX5A,` 935slzf(8#zqX-orm' );

define( 'LOGGED_IN_KEY',    'gAJ@YRb<y+nDeR5vSQ,Fb7,LFlE#AmyVt0jVPS_gzu]>?1MXM|PS7bIbxyer31X<' );

define( 'NONCE_KEY',        'sobz:9Z%Jfbflpj@/L>!]W_9:<{|r+B~.^k!qsgm/xyrzn?AAY^C}BG@<qm5q5BD' );

define( 'AUTH_SALT',        'xKihBL#2;;eAQ%kWjbtm]XR)m 6NIdfCq+`M!C*wY<ZM~z=Jk39`j]H76#s@@gRn' );

define( 'SECURE_AUTH_SALT', 'Bv/-*,onx2H) 4xJc$%FmO0oS>Jm 1l+!#)^1R<2dxq!R6`)iDiw~r@j>Lp3UO_+' );

define( 'LOGGED_IN_SALT',   's>@lJ>`/0v|PWXJ3R`nwku%dt&MRn0+IQ@sITMZ,m^O!9BEM;agaP[0kP})one36' );

define( 'NONCE_SALT',       '</ZX9t=+S}|eBNqtr`I/.`$|*~dKmI4zFcAs97cKMQ#qL:qIAcH<*Om1@?^g=(5s' );


/**#@-*/


/**

 * WordPress database table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'wp_';


/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the documentation.

 *

 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/

 */

define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */




define( 'FS_METHOD', 'direct' );
/**
 * The WP_SITEURL and WP_HOME options are configured to access from any hostname or IP address.
 * If you want to access only from an specific domain, you can modify them. For example:
 *  define('WP_HOME','http://example.com');
 *  define('WP_SITEURL','http://example.com');
 *
 */
if ( defined( 'WP_CLI' ) ) {
	$_SERVER['HTTP_HOST'] = '127.0.0.1';
}

define( 'WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */


/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', __DIR__ . '/' );

}


/** Sets up WordPress vars and included files. */

require_once ABSPATH . 'wp-settings.php';

/**
 * Disable pingback.ping xmlrpc method to prevent WordPress from participating in DDoS attacks
 * More info at: https://docs.bitnami.com/general/apps/wordpress/troubleshooting/xmlrpc-and-pingback/
 */
if ( !defined( 'WP_CLI' ) ) {
	// remove x-pingback HTTP header
	add_filter("wp_headers", function($headers) {
		unset($headers["X-Pingback"]);
		return $headers;
	});
	// disable pingbacks
	add_filter( "xmlrpc_methods", function( $methods ) {
		unset( $methods["pingback.ping"] );
		return $methods;
	});
}
