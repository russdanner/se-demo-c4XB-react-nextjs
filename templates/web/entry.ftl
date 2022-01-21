<#import "/templates/system/common/crafter.ftl" as crafter />

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>${model.title_t}</title>
		<style>
			html, body {
				color: #333;
				height: 100%;
				background: #f3f3f3;
				font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
			}
			main {
				max-width: 800px;
				padding: 40px;
				background: rgba(255,255,255,0.6);
				border-radius: 20px;
				margin: 100px auto;
			}
		</style>
		<@crafter.head/>
	</head>
	<body>
		<@crafter.body_top/>
		<main>
			<h1>Readme</h1>
			<ul>
				<li>
					In the Crafter CMS site sandbox directory, you'll find a directory called
					app, which is the Next.JS app. Visit that directory on your terminal and run `yarn`
				</li>
				<li>Run `yarn dev` to start the node server on localhost:3000</li>
				<li>Open Site Tools > Config</li>
				<li>Select "Configuration"</li>
				<li>Search "Proxy Config"</li>
				<li>Comment line 58 and uncomment line 59</li>
				<li>Close the pop up and refresh the page. You're now viewing the next.js application.</li>
			</ul>
		</main>
		<@crafter.body_bottom/>
	</body>
</html>
