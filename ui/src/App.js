import logo from './logo.svg';
import './App.css';
// const client = ...

import { ApolloClient, useQuery, ApolloProvider, gql } from '@apollo/client';


const query = gql`
  query GetTodo{
    getTodos {
      id
      title
      completed
      user {
        id
        name
      }
    }
 
  }
`


function App() {
  const { loading, data } = useQuery(query);
  console.log(data.getTodos)
  if (loading) return <h1>Loading</h1>

  return (
    <div className="App">
      <div>
        <table>
          <tbody>
            {
              data.getTodos.map((todo) => {
             return   <tr>
                  <td>{todo.title}</td>
                  <td>{todo?.user?.name}</td>
                </tr>

              })
            }

          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;
