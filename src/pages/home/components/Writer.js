import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { WriterWrapper, RecommendWrite, WriterInfo } from '../style';

class Writer extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <WriterWrapper>
                <p className="rec">推荐作者</p>
                {
                   list.map((item) => {
                        return (
                            // <RecommendWrite imgUrl={item.get('imgUrl')} key={item.get('id')} alt="img"/>
                            <RecommendWrite key={item.get('id')}>
                                
                                    <img className="pic" src={item.get('imgUrl')} alt="img" />
                                    <WriterInfo>
                                        <h3 className="name">{item.get('name')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </WriterInfo>
                               
                            </RecommendWrite>
                        );
                    })
                }
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'writerList'])
})

export default connect(mapState, null) (Writer);

