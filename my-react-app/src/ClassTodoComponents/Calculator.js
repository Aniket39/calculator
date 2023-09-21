import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


const Calculator=()=>{
    const [speedObj, setSpeedObj] = React.useState({ 
        Kmph: 0,
        mph: 0
    });

    const convertKmphToMph = (Kmph)=>{
        const mph = Kmph/1.6;
        setSpeedObj({
            Kmph: Kmph,
            mph: mph
        });
    } 
    const convertMphToKmph = (mph)=>{
        const Kmph = mph*1.6;
        setSpeedObj({
            Kmph: Kmph,
            mph: mph
        });
    }
    return(
        <Card className='pos-centre' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Speed Converted</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Convert Kmph to Mph</Card.Subtitle>
          <Card.Text>
            <hr />
            {/* Both my input goes here */}
            <KmphInput converter={convertKmphToMph} speed={speedObj.Kmph} />
            <MphInput converter={convertMphToKmph} speed={speedObj.mph} />
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
const KmphInput = ({converter, speed})=>{
    const handler = (e)=>{
        converter(e.target.value);
    }
    return(
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Speed (Kmph)</Form.Label>
        <Form.Control  type="number" value={speed} onChange={handler}  placeholder="Enter Speed in Kmph" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Form>
    )
}

const MphInput = ({converter, speed})=>{
    const handler = (e)=>{
        converter(e.target.value);
    }
    return(
        <Form>
        <Form.Group className="mb-3">
          <Form.Label>Speed (Mph)</Form.Label>
          <Form.Control onChange={handler} type="number" value={speed} placeholder="Enter Speed in Mph" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        </Form>
    )
}

export default Calculator;
