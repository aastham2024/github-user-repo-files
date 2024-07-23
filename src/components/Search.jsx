import React from "react"
import { useState } from "react"
import './Search.css'

export const Search = () => {

    const [input, setInput] = useState("");
    const [user, setUser] = useState("");
    const [repos, setRepos] = useState([]);
    const [repo, setRepo] = useState("");
    const [files, setFiles] = useState([]);

    const fetchRepos = (user) => {
        fetch(`https://api.github.com/users/${user}/repos?per_page=100`)
        .then(response => response.json())
        .then(data => {
            setRepos(data);
            console.log(data);
        }
        )
        .catch(error => {
            setRepos([]);
            setRepo("");
            setFiles([]);
            console.error(error);
            alert("User does not exist");
        })
    }

    const fetchFiles = (repo) => {
        fetch(`https://api.github.com/repos/${input}/${repo}/contents`)
        .then(response => response.json())
        .then(data => setFiles(data))
        .catch(error => {
            console.error(error);
            alert(error);
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser(input);
        setRepos([]);
        setRepo("");
        setFiles([]);
        fetchRepos(input);
    }

    const handleClick = (repo) => {
        fetchFiles(repo);
        setRepo(repo);
    }

    return (
        <div className="app-container">
            <div className="search-container">
                <form onSubmit={handleSubmit}>
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Enter a Username..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <input
                        className="search-button"
                        type="submit"
                    />
                </form>

                <h3>Repositories</h3>
                <div className="repo">
                    <ul>
                        { repos.map((repo) => (
                            <li id="repos" key={repo.id} onClick={() => handleClick(repo.name)}>
                                {repo.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="file-results">

                <h1 id="title">Files in <i>{user}</i>'s repo: <i>{repo}</i></h1>

                <div className="files">
                    <ul>
                        { files.map((file, index) => (
                            <li id="files" key={index}>
                                {file.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}