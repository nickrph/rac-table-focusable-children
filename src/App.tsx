import {
  Button,
  Cell,
  Column,
  Dialog,
  DialogTrigger,
  Heading,
  Link,
  Modal,
  OverlayArrow,
  Popover,
  Row,
  Table,
  TableBody,
  TableHeader,
} from 'react-aria-components';
import './App.css';
import './styles/Button.css';
import './styles/Link.css';
import './styles/Modal.css';
import './styles/Popover.css';
import './styles/Table.css';

const App = () => {
  return (
    <div className="content">
      <Table aria-label="Files" selectionMode="multiple">
        <TableHeader>
          <Column isRowHeader>Name</Column>
          <Column>Type</Column>
          <Column>Date Modified</Column>
          <Column>Actions</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>Games</Cell>
            <Cell>File folder</Cell>
            <Cell>6/7/2020</Cell>
            <Cell>
              <Button>Button</Button>
              <DialogTrigger>
                <Button>Popover</Button>
                <Popover>
                  <OverlayArrow>
                    <svg width={12} height={12} viewBox="0 0 12 12">
                      <path d="M0 0 L6 6 L12 0" />
                    </svg>
                  </OverlayArrow>
                  <Dialog>
                    <Heading slot="title">Popover</Heading>
                    <p>Popover displayed.</p>
                  </Dialog>
                </Popover>
              </DialogTrigger>
            </Cell>
          </Row>
          <Row>
            <Cell>Movies</Cell>
            <Cell>File folder</Cell>
            <Cell>6/7/2024</Cell>
            <Cell>
              <Link>Link</Link>
              <DialogTrigger>
                <Button>Modal</Button>
                <Modal isDismissable>
                  <Dialog>
                    <Heading slot="title">Modal</Heading>
                    <p>Modal displayed.</p>
                  </Dialog>
                </Modal>
              </DialogTrigger>
            </Cell>
          </Row>
        </TableBody>
      </Table>
    </div>
  );
};

export default App;
