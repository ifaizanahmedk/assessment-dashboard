import { useState } from "react";
import {
	SearchBarContainer,
	SearchInput,
	SearchClear,
	SearchIcon,
} from "./styled";
import searchIcon from "@/assets/icons/search.svg";

const SearchBar = ({ placeholder = "Search...", onSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleChange = (e) => {
		const value = e.target.value;
		setSearchTerm(value);
		if (onSearch) {
			onSearch(value);
		}
	};

	const handleClear = () => {
		setSearchTerm("");
		if (onSearch) {
			onSearch("");
		}
	};

	return (
		<SearchBarContainer>
			<SearchIcon src={searchIcon} />
			<SearchInput
				type="text"
				placeholder={placeholder}
				value={searchTerm}
				onChange={handleChange}
			/>
			{searchTerm && (
				<SearchClear onClick={handleClear} aria-label="Clear search">
					✕
				</SearchClear>
			)}
		</SearchBarContainer>
	);
};

export default SearchBar;
