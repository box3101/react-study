function Layout(props) {
  console.log(props); // {children : 'Members Page'}
	return (
		<main id={props.title.toLowerCase()}>
      {/* 간단한건 prop 긴거는 children 으로 넘김 */}
			<h2>{props.title}</h2>
      <section>{props.children}</section>
		</main>
	);
}

export default Layout;
