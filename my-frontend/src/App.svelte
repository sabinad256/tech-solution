<script lang="ts">
  import {request, gql} from "graphql-request"
  import Users from './lib/Users.svelte';
  import Modal from './lib/Modal.svelte';

  let currentPage = 0;
  let totalPage = 0;
  let pageLimit = 200;
  let showModal = false;
  let username = "Enter a username";
  let isNewUser = false;

  const query = gql`
    query getUsers($limit: Int!, $page: Int!){
        Users(limit: $limit, page: $page) {
            meta {
                pagination {
                    page
                    pageSize
                    totalOfPage
                    totalOfRecord
                }
            }
            data {
                id
                username
                companies{
                    id
                    name
                }
            }
        }
    }
  `;

const mutation = gql`
  mutation addUser($username: String!, $limit: Int!) {
    addUser(username: $username, limit: $limit) {
        meta {
            pagination {
                page
                pageSize
                totalOfPage
                totalOfRecord
            }
        }
  }
}
`
   
    let users:any = [];
  
    const loadUser = (limit: number, page: number) => {
        isNewUser = false;
        request("http://localhost:4000/graphql",query,{limit: limit, page: page} ).then((response) => {
        users = response?.Users.data;
        currentPage = response?.Users.meta.pagination.page;
        totalPage = response?.Users.meta.pagination.totalOfPage;
        });

    }

    const createUser = (username: string) => {
        request("http://localhost:4000/graphql", mutation, {username: username, limit: pageLimit}).then((response) => {
            currentPage = response?.addUser.meta.pagination.page;
            showModal = false;
            changePage(currentPage);
            isNewUser = true;
        });
    }

    const changePage = (newPage:number) => {
        loadUser(pageLimit, newPage)
    }

    //default load users
    changePage(1)
 </script>

<main>
  
  <h1>Harv Tech Challenge</h1>
  <button class="btn-right" on:click={() => (showModal = true)}> Add Username</button>
  {#if isNewUser}
  <div class="banner">
        New User <span class="selected"> {username} </span>Added
  </div>
  {/if}

  <Users {users} />
  {#if showModal}
  <Modal bind:showModal>
	<h2 slot="header">
		<small><em>Add</em> user details</small>
	</h2>
        Enter username here: <input type="text" bind:value={username} />
        <button on:click={()=> {createUser(username), (showModal=false)}}>Create</button>
    </Modal>
    {/if}
  <div class="pagination">
    <ul>
        {#each {length: totalPage} as _, i}
        <li>

            {#if currentPage === i+1}
            <span class="selected">{i + 1}</span>
            {:else }
            <span on:click={() => changePage(i + 1)}>{i + 1}</span>
            {/if}
        </li>
        {/each}
    </ul>
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
  .pagination ul > li {
   display:inline-block;
   padding:0px 10px;
  }
.btn-right {
    display: block;
    float: right;
    background: #66a103;
}
.pagination ul > li span{
    cursor: pointer;
  }

.selected {
    font-weight: bolder;
}
.banner {
    background-color: green;
    display: inline-block;
}
</style>
