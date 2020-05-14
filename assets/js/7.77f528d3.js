(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{333:function(t,a,e){"use strict";e.r(a);var s=e(18),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("h2",{attrs:{id:"general"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),e("h2",{attrs:{id:"connect-to-hasura"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-hasura"}},[t._v("#")]),t._v(" Connect to Hasura")]),t._v(" "),e("p",[t._v("In order to connect HBP to Hasura, you need to provide the Hasura GraphQL endpoint in the "),e("code",[t._v("HASURA_ENDPOINT")]),t._v(" environment variable. Note that this should include the full path of the GraphQL endpoint, usually ending with "),e("code",[t._v("/v1/graphql")]),t._v(".\nFor example, in the "),e("a",{attrs:{href:"https://github.com/nhost/hasura-backend-plus/blob/master/docker-compose.yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("default docker-compose file of the HBP repository"),e("OutboundLink")],1),t._v(", "),e("code",[t._v("HASURA_ENDPOINT")]),t._v(" equals "),e("code",[t._v("http://graphql-engine:8080/v1/graphql")]),t._v(".")]),t._v(" "),e("p",[t._v("You also need to provide a valid Hasura admin secret key in the "),e("code",[t._v("HASURA_GRAPHQL_ADMIN_SECRET")]),t._v(" environment variable. Note that this variable is mandatory for HBP to work, i.e. HBP won't work if your Hasura instance is not secured with such an admin key. You can find further reading about admin secret keys in the "),e("a",{attrs:{href:"https://hasura.io/docs/1.0/graphql/manual/deployment/production-checklist.html#set-an-admin-secret",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hasura documentation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("The last point of attention is to make sure both HBP and Hasura are using the same JWT configuration: as HBP will generate the JWT used for authentication in Hasura, it is very important that JWT is configured in a way that Hasura understands it. You will find more information on how to configure JWT in HBP.")]),t._v(" "),e("h2",{attrs:{id:"configure-jwt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-jwt"}},[t._v("#")]),t._v(" Configure JWT")]),t._v(" "),e("h2",{attrs:{id:"migrations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migrations"}},[t._v("#")]),t._v(" Migrations")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Before running migrations on any sort, it is HIGHLY recommended to make a backup of your database.")])]),t._v(" "),e("p",[t._v("To get HBP running correctly we must configure Hasura and PostgreSQL. This configurations is done using Hasura migrations and will add the correct database configuration and apply the correct Hasura metadata.")]),t._v(" "),e("h3",{attrs:{id:"apply-migrations-for-a-new-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apply-migrations-for-a-new-installation"}},[t._v("#")]),t._v(" Apply migrations for a new installation")]),t._v(" "),e("p",[t._v("For a complete new installation you can have Hasura apply the migrations automatically for you, using Docker. This is an example in docker-compose.")]),t._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("graphql-engine")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hasura/graphql"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("engine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v1.2.1.cli"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("migrations"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("v2\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("depends_on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'postgres'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env_file")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" .env\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8080:8080'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("/hasura"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("backend"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("plus/migrations"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/hasura"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("migrations\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("/hasura"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("backend"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("plus/metadata"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/hasura"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("metadata\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("h3",{attrs:{id:"migrating-from-hbp-v1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-hbp-v1"}},[t._v("#")]),t._v(" Migrating from HBP v1")]),t._v(" "),e("p",[t._v("Hasura Backend Plus v2 introduces some brand new features, coming with some breaking changes:")]),t._v(" "),e("ul",[e("li",[t._v("While all the former v1 features exist in v2, the "),e("a",{attrs:{href:"api"}},[t._v("API endpoints")]),t._v(" have been modified, and some may behave slightly differently. You may need to change your frontend applications accordingly.")]),t._v(" "),e("li",[t._v("The Storage module have been completely rewritten. ")]),t._v(" "),e("li",[t._v("The refresh token is now stored in an "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP cookie"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("To upgrade from v1 to v2:")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("We'll be using the "),e("a",{attrs:{href:"https://hasura.io/docs/1.0/graphql/manual/hasura-cli/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hasura CLI"),e("OutboundLink")],1),t._v(". Make sure it's installed on your computer.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("All user and account data will be copied to the new v2 schema and work out of the box.")])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Make sure you have backed up your database!")])]),t._v(" "),e("li",[e("p",[t._v("Download HBP locally and change directory")])])]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:nhost/hasura-backend-plus.git\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" hasura-backend-plus\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Create empty "),e("code",[t._v("config.yaml")]),t._v(" file.")])]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" config.yaml\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("Re order the directories so we'll be using the "),e("code",[t._v("migrations-v1")]),t._v(" directory.")])]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf migrations\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" migrations-v1 migrations\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Apply migrations")])]),t._v(" "),e("p",[t._v("Note: "),e("code",[t._v("[endpoint]")]),t._v(" should not include "),e("code",[t._v("/v1/graphql")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("hasura migrate apply --endpoint"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("endpoint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --admin-secret"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("admin-secret"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"6"}},[e("li",[t._v("Clean up")])]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf hasura-backend-plus\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("You have now migrated from HBP v1 to HBP v2 schema. You can no start using HBP v2!")]),t._v(" "),e("h3",{attrs:{id:"experimental"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#experimental"}},[t._v("#")]),t._v(" Experimental")]),t._v(" "),e("p",[t._v("HBP can apply migrations automatically on startup. Both from a zero to version 2. And from version 1 to version 2. However, this is a experimental feature and it's not recommended to be used in production since it could lead to unwanted side effects.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("The HBP migration system relies on "),e("a",{attrs:{href:"https://hasura.io/docs/1.0/graphql/manual/hasura-cli/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hasura CLI"),e("OutboundLink")],1),t._v(" and uses a "),e("a",{attrs:{href:"https://hasura.io/docs/1.0/graphql/manual/migrations/config-v1/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("v1 migrations/metadata configuration"),e("OutboundLink")],1),t._v(", as the config v2 doesn't allow metadata incremental change (yet?).")])]),t._v(" "),e("p",[t._v("By default, HBP does not checks when starting if its schema is already present in the database. If not, it runs the necessary SQL migrations and loads the related Hasura metadata, while keeping the existing database and Hasura metadata unchanged.")]),t._v(" "),e("p",[t._v("You can disable this automatic check and migration system by setting "),e("code",[t._v("AUTO_MIGRATE=false")]),t._v(".")]),t._v(" "),e("p",[t._v("If you want to upgrading HBP v1 to v2, you can set "),e("code",[t._v("AUTO_MIGRATE=v1")]),t._v(" and restart HBP. HBP will then upgrade the database and Hasura for HBPv2. All user and account data will be placed correctly in the new v2 schema.")]),t._v(" "),e("h2",{attrs:{id:"registration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#registration"}},[t._v("#")]),t._v(" Registration")]),t._v(" "),e("h3",{attrs:{id:"activate-accounts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#activate-accounts"}},[t._v("#")]),t._v(" Activate accounts")]),t._v(" "),e("p",[t._v("By default, accounts are automatically activated on registration. You may want to change this so you add a step to the registration process.")]),t._v(" "),e("p",[t._v("To deactivate autoactivation, set the environment variable "),e("code",[t._v("AUTO_ACTIVATE_NEW_USERS=false")])]),t._v(" "),e("p",[t._v("In addition to this, you can send a verification email with an activation link. You will then need to "),e("a",{attrs:{href:"#enable-emails"}},[t._v("configure the connection to a SMTP server")]),t._v(".")]),t._v(" "),e("p",[t._v("If SMTP is enabled, then the user will receive an email with an activation link. If the activation succeeds, the user is redirected to the url found in the "),e("code",[t._v("REDIRECT_URL_SUCCESS")]),t._v(" environment variable. If it fails, they will redirected to the url given by the "),e("code",[t._v("REDIRECT_URL_ERROR")]),t._v(" environment variable.")]),t._v(" "),e("p",[t._v("You can change the default email templates. In order to do so, you can mount "),e("a",{attrs:{href:"#custom-configuration-files"}},[t._v("custom configuration files")]),t._v(" when using docker, or change files in the "),e("a",{attrs:{href:"https://github.com/nhost/hasura-backend-plus/tree/master/custom",target:"_blank",rel:"noopener noreferrer"}},[t._v("custom directory"),e("OutboundLink")],1),t._v(" when running HBP from the source code.\nOther email templates are available and described "),e("a",{attrs:{href:"#email-templates"}},[t._v("here")])]),t._v(" "),e("h3",{attrs:{id:"limit-email-domains"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#limit-email-domains"}},[t._v("#")]),t._v(" Limit email domains")]),t._v(" "),e("p",[t._v("You can limit registration to ranges of emails that are only part of a whitelist. For instance, you may want to limit registration only to the email addresses of your own organisation. You can pass a list of comma-separated email domains to the "),e("code",[t._v("ALLOWED_EMAIL_DOMAINS")]),t._v(" environment variable, for instance:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ALLOWED_EMAIL_DOMAINS=gmail.com,yourorganisation.com\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"password-constraints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#password-constraints"}},[t._v("#")]),t._v(" Password constraints")]),t._v(" "),e("p",[t._v("By default, clients can register with a password of at least three characters. You can change this in setting a higher value:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("MIN_PASSWORD_LENGTH=6\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("You can ask HBP to check on "),e("a",{attrs:{href:"https://haveibeenpwned.com/Passwords",target:"_blank",rel:"noopener noreferrer"}},[t._v("Have I Been Pwned"),e("OutboundLink")],1),t._v(" if the password has been previously exposed in data breaches. If so, the registration will fail. This option is disabled by default. You can change it to:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("HIBP_ENABLE=true\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"additional-registration-fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#additional-registration-fields"}},[t._v("#")]),t._v(" Additional registration fields")]),t._v(" "),e("p",[t._v("You may want to extend the "),e("code",[t._v("public.users")]),t._v(" table with your own fields and relations, and to expect the client to set some of them when registering. It is possible to set a list of columns in the "),e("code",[t._v("REGISTRATION_CUSTOM_FIELDS")]),t._v(" environment value.")]),t._v(" "),e("p",[t._v("Here is an example on the way to proceed to add a "),e("code",[t._v("nickname")]),t._v(" value to the registration:")]),t._v(" "),e("ol",[e("li",[t._v("Add a column "),e("code",[t._v("nickname")]),t._v(" of type text to the "),e("code",[t._v("public.users")]),t._v(" table")]),t._v(" "),e("li",[t._v("Set the environment variable "),e("code",[t._v("REGISTRATION_CUSTOM_FIELDS=nickname")])]),t._v(" "),e("li",[t._v("The registration endpoint now expects a "),e("code",[t._v("nickname")]),t._v(" value in addition to "),e("code",[t._v("email")]),t._v(" and "),e("code",[t._v("password")])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Any given field must exist in the "),e("code",[t._v("users")]),t._v(" GraphQL type that corresponds to the "),e("code",[t._v("public.users")]),t._v(" PostgreSQL table, or registration will fail.")])]),t._v(" "),e("h2",{attrs:{id:"authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),e("h3",{attrs:{id:"oauth-providers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oauth-providers"}},[t._v("#")]),t._v(" OAuth Providers")]),t._v(" "),e("h3",{attrs:{id:"two-factor-authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#two-factor-authentication"}},[t._v("#")]),t._v(" Two-factor Authentication")]),t._v(" "),e("h2",{attrs:{id:"enable-emails"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enable-emails"}},[t._v("#")]),t._v(" Enable emails")]),t._v(" "),e("h2",{attrs:{id:"custom-configuration-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-configuration-files"}},[t._v("#")]),t._v(" Custom configuration files")]),t._v(" "),e("h3",{attrs:{id:"storage-rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#storage-rules"}},[t._v("#")]),t._v(" Storage Rules")]),t._v(" "),e("h3",{attrs:{id:"email-templates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#email-templates"}},[t._v("#")]),t._v(" Email templates")]),t._v(" "),e("h3",{attrs:{id:"private-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#private-key"}},[t._v("#")]),t._v(" Private key")]),t._v(" "),e("h2",{attrs:{id:"custom-user-schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-user-schema"}},[t._v("#")]),t._v(" Custom User Schema")]),t._v(" "),e("h2",{attrs:{id:"rate-limiting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rate-limiting"}},[t._v("#")]),t._v(" Rate limiting")]),t._v(" "),e("h2",{attrs:{id:"environment-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[t._v("#")]),t._v(" Environment Variables")]),t._v(" "),e("h3",{attrs:{id:"general-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#general-2"}},[t._v("#")]),t._v(" General")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("HASURA_ENDPOINT")]),t._v(" (required)")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Url of the Hasura GraphQL engine endpoint used by the backend to access the database.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("HASURA_GRAPHQL_ADMIN_SECRET")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("The secret set in the Hasura GraphQL Engine to allow admin access to the service. "),e("strong",[t._v("Strongly recommended")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("PORT")])]),t._v(" "),e("td",[t._v("3000")]),t._v(" "),e("td",[t._v("Port of the service")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SERVER_URL")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Current server URL. Currently used only for creating links from email templates")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("MAX_REQUESTS")])]),t._v(" "),e("td",[t._v("100")]),t._v(" "),e("td",[t._v("Maximum requests per IP within the following "),e("code",[t._v("TIME_FRAME")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("TIME_FRAME")])]),t._v(" "),e("td",[t._v("900000")]),t._v(" "),e("td",[t._v("Timeframe used to limit requests from the same IP, in milliseconds. Defaults to 15 minutes.")])])])]),t._v(" "),e("h3",{attrs:{id:"authentication-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authentication-2"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("ALLOWED_EMAIL_DOMAINS")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("List of comma-separated email domain names that are allowed to register.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("AUTO_ACTIVATE_NEW_USERS")])]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("When set to true, automatically activate the users once registererd.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("COOKIE_SECRET")])]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("DEFAULT_USER_ROLE")])]),t._v(" "),e("td",[t._v("user")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("HIBP_ENABLE")])]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("JWT_ALGORITHM")])]),t._v(" "),e("td",[t._v("RS256")]),t._v(" "),e("td",[t._v("Valid values: RS256, RS384, RS512, HS256, HS384, HS512")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("JWT_KEY")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Encryption secret. Required when using a SHA (RS*) algorithm. When using a RSA algorithm (RS*), should contain a valid RSA PEM key, otherwise "),e("code",[t._v("JWT_KEY_FILE_PATH")]),t._v(" will be used.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("JWT_EXPIRES_IN")])]),t._v(" "),e("td",[t._v("15")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("JWT_KEY_FILE_PATH")])]),t._v(" "),e("td",[t._v("custom/keys/private.pem")]),t._v(" "),e("td",[t._v("Path to the RSA PEM private key file when using a RSA (RS*) algorithm and no "),e("code",[t._v("JWT_KEY")]),t._v(" is set. When used, will create a random key if the file is not found.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("MIN_PASSWORD_LENGTH")])]),t._v(" "),e("td",[t._v("3")]),t._v(" "),e("td",[t._v("Minimum allowed password length.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("REDIRECT_URL_ERROR")])]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("REDIRECT_URL_SUCCESS")])]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("JWT_REFRESH_EXPIRES_IN")])]),t._v(" "),e("td",[t._v("43200")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("EMAILS_ENABLE")])]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("When set to true, emails are sent on certain steps, like after registration for account activation when autoactivation is deactivated, or for changing emails or passwords")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SMTP_HOST")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("SMTP server path to use for sending emails.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SMTP_PASS")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Password to authenticate on the SMTP server.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SMTP_USER")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Username to authenticate on the SMTP server.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SMTP_PORT")])]),t._v(" "),e("td",[t._v("587")]),t._v(" "),e("td",[t._v("SMTP server port.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SMTP_SECURE")])]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("Set to true when the SMTP uses SSL.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("REGISTRATION_CUSTOM_FIELDS")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Fields that need to be passed on to the registration patload, and that correspond to columns of the "),e("code",[t._v("public.users")]),t._v("table.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("JWT_CUSTOM_FIELDS")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("List of comma-separated column names from the "),e("code",[t._v("public.users")]),t._v(" tables that will be added to the "),e("code",[t._v("https://hasura.io/jwt/claims")]),t._v("JWT claims. Column names are kebab-cased and prefixed with "),e("code",[t._v("x-")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("OTP_ISSUER")])]),t._v(" "),e("td",[t._v("HBP")]),t._v(" "),e("td",[t._v("One-Time Password issuer name used with Muti-factor authentication.")])])])]),t._v(" "),e("h3",{attrs:{id:"storage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[t._v("#")]),t._v(" Storage")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("S3_ACCESS_KEY_ID")])]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("S3_BUCKET")])]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("S3_ENDPOINT")])]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("S3_SECRET_ACCESS_KEY")])]),t._v(" "),e("td"),t._v(" "),e("td")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);