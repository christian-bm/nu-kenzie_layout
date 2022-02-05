import Header from "../../Header";
import Main from "../../Main";

function Home({ handleIsLoggedin, listTransactions, handleListTransactions }) {
	return (
		<>
			<Header handleIsLoggedin={handleIsLoggedin}/>
			<Main listTransactions={listTransactions} handleListTransactions={handleListTransactions}/>
		</>
	);
}

export default Home;