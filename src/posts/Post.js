import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Post extends PureComponent {
  render() {
    const postClasses = classNames('post', {
      published: this.props.status === 'publish'
    });

    return (
      <div className='col'>
        <div
          className={postClasses}
          dangerouslySetInnerHTML={{ __html: this.props.excerpt }}
        />
        <div>
          <a href={this.props.link} target='_blank'>
            {this.props.title}
          </a>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
	status: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired
};
