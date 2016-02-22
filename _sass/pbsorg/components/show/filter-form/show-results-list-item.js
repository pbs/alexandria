'use strict';

let PureRenderMixin = React.addons.PureRenderMixin,
  ListItem = React.createClass({

  /**
   * Array of any mixin libraries for react
   */
  mixins: [PureRenderMixin],

  /**
   * Renders component.
   */
  render() {
    return (
      <tr key={this.props.show.id}>
        <td>
          <div className="visible-xs">
            <div>
              <a href={this.props.show.url}>{this.props.show.title}</a>
            </div>
            <div className="video-count">
              {this.props.show['video_count']} Videos  |  {(this.props.show['genre_titles'] || []).join(', ')}
            </div>
          </div>
          <div className="hidden-xs">
            <a href={this.props.show.url}>{this.props.show.title}</a>
          </div>
        </td>
        <td className="hidden-xs">{this.props.show['video_count']}</td>
        <td className="hidden-xs">{(this.props.show['genre_titles'] || []).join(', ')}</td>
        <td className="hidden-xs hidden-sm">
          <a href={this.props.show["latest_episode"].url}>{this.props.show["latest_episode"].title}</a>
        </td>
      </tr>
    );
  }

});

module.exports = ListItem;
