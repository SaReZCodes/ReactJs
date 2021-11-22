import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null
    }


    render() {
        const posts = this.state.posts.map(post => {
            return <Post post={post} key={post.id} postClick={() => this.postClickHandler(post.id)} />
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost addClick={e => this.addClickHandler(e)} />
                </section>
            </div>
        );
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.ir/posts').then(res => {
            const posts = res.data.slice(0, 8);
            const updatePost = posts.map(post => {
                return { ...post, author: 'saeed' }
            })
            this.setState({ posts: updatePost });
        });
    }

    postClickHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    addClickHandler = (event) => {
        console.log(event);
    }
}

export default Blog;