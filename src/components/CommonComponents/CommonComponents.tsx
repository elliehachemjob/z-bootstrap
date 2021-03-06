// @ts-ignore
import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Button,
  Alert,
  Accordion,
  Badge,
  ButtonGroup,
  Card,
  Carousel,
  CloseButton,
  Dropdown,
  Figure,
  Form,
  Image,
  ListGroup,
  Modal,
  Nav,
  Offcanvas,
  Overlay,
} from 'react-bootstrap';

interface ButtonComponentProps {
  onClick?: () => void;
  text?: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-light'
    | 'outline-link';
  size?: 'lg' | 'sm';
  disabled?: boolean;
  active?: boolean;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = (
  props: any
): any => {
  return (
    <Button
      onClick={
        !props.onClick
          ? () => {
              alert('use the onClick prop to add your own function here');
            }
          : props.onClick
      }
      variant={!props.variant ? 'primary text-right' : props.variant}
      type="submit"
      size={!props.size ? '' : props.size}
      disabled={!props.disabled ? true : props.disabled}
      active={!props.active ? false : props.active}
    >
      {!props.text ? 'Text aligned' : props.text}
    </Button>
  );
};

interface AlertComponentProps {
  onClose?: () => void;
  alertHeadingText: string;
  allowHeading: boolean;
  alertBodyText?: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-light'
    | 'outline-link';
  removable?: boolean;
  show?: boolean;
}

export const AlertComponent: React.FC<AlertComponentProps> = (
  props: any
): any => {
  return (
    <div>
      {props.allowHeading ? (
        <Alert variant={!props.variant ? 'primary' : props.variant}>
          <p>
            {!props.alertHeadingText
              ? ' Heading Brief Description  Here '
              : props.alertHeadingText}
          </p>
        </Alert>
      ) : (
        <Alert
          show={!props.show ? true : props.show}
          onClose={
            !props.onClose
              ? () => {
                  alert(
                    'function to do on close perhaps turn show props to flase or give an alert '
                  );
                }
              : props.onClose
          }
          dismissible={!props.removable ? true : props.removable}
          variant={!props.variant ? 'success' : props.variant}
        >
          <Alert.Heading>
            {!props.alertHeadingText
              ? 'Heading Text  Here'
              : props.alertHeadingText}
          </Alert.Heading>
          <p>
            {!props.alertBodyText
              ? ' Heading Brief Description   Here'
              : props.alertBodyText}
          </p>
        </Alert>
      )}
    </div>
  );
};

interface AccordionComponentProps {
  accordionItemId: string;
  onClickHeader?: () => void;
  accordionTitleText?: string;
  accordionBodyText?: string;
  onClickBody?: () => void;
}

export const AccordionComponent: React.FC<AccordionComponentProps> = (
  props: any
): any => {
  return (
    <Accordion>
      <Accordion.Item
        eventKey={!props.accordionItemId ? '0' : props.accordionItemId}
      >
        <Accordion.Header
          onClick={
            !props.onClickHeader
              ? () => {
                  alert('header Clicked Put Function Here');
                }
              : props.onClickHeader
          }
        >
          {!props.accordionTitleText
            ? 'Accordion Title '
            : props.accordionTitleText}
        </Accordion.Header>
        <Accordion.Body
          onClick={
            !props.onClickBody
              ? () => {
                  alert('Body clicked header Clicked Put Function Here');
                }
              : props.onClickBody
          }
        >
          {!props.accordionBodyText
            ? 'Accordion Body'
            : props.accordionBodyText}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

interface NotificationButtonComponentProps {
  onClick?: () => void;
  buttonText?: string;
  buttonVariant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-light'
    | 'outline-link';
  badgeVariant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-light'
    | 'outline-link';
  size?: 'lg' | 'sm';
  disabled?: boolean;
  active?: boolean;
  badgeCircular: boolean;
  badgeTextValue: string;
}

export const NotificationButtonComponent: React.FC<NotificationButtonComponentProps> = (
  props: any
): any => {
  return (
    <Button variant={!props.buttonVariant ? 'primary' : props.buttonVariant}>
      {!props.buttonText ? 'Button Text' : props.buttonText}

      <Badge
        pill={!props.badgeCircular ? false : props.badgeCircular}
        bg={!props.badgeVariant ? 'danger' : props.variant}
      >
        {!props.badgeTextValue ? 'value here' : props.badgeTextValue}
      </Badge>
    </Button>
  );
};

interface ButtonGroupComponentProps {
  onClickbutton1?: () => void;
  onClickbutton2?: () => void;
  onClicbutton3?: () => void;
  buttonText1?: string;
  buttonText2?: string;
  buttonText3?: string;
  buttonVariant1?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-light'
    | 'outline-link';
  buttonVariant2?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-light'
    | 'outline-link';
  buttonVariant3?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-light'
    | 'outline-link';
  buttonSize1?: 'lg' | 'sm';
  buttonSize2?: 'lg' | 'sm';
  buttonSize3?: 'lg' | 'sm';
  buttonDisabled1?: boolean;
  buttonDisabled2?: boolean;
  buttonDisabled3?: boolean;
  buttongActive1?: boolean;
  buttongActive2?: boolean;
  buttongActive3?: boolean;
}

export const ButtonGroupComponent: React.FC<ButtonGroupComponentProps> = (
  props: any
): any => {
  return (
    <ButtonGroup>
      <Button
        className="text-right"
        onClick={
          !props.onClickbutton1
            ? () => {
                alert('use the onClick prop to add your own function here');
              }
            : props.onClickbutton1
        }
        variant={!props.buttonVariant1 ? 'secondary ' : props.buttonVariant1}
        type="submit"
        size={!props.buttonSize1 ? '' : props.buttonSize1}
        disabled={!props.buttonDisabled1 ? false : props.buttonDisabled1}
        active={!props.buttongActive1 ? false : props.buttongActive1}
      >
        {!props.buttonText1 ? 'text change 1  here' : props.buttonText1}
      </Button>
      <Button
        className="text-right"
        onClick={
          !props.onClickbutton2
            ? () => {
                alert('use the onClick prop to add your own function here');
              }
            : props.onClickbutton2
        }
        variant={!props.buttonVariant2 ? 'secondary ' : props.buttonVariant2}
        type="submit"
        size={!props.buttonSize2 ? '' : props.buttonSize2}
        disabled={!props.buttonDisabled2 ? false : props.buttonDisabled2}
        active={!props.buttongActive2 ? false : props.buttongActive2}
      >
        {!props.buttonText2 ? 'text change 2  here' : props.text2}
      </Button>
      <Button
        className="text-right"
        onClick={
          !props.onClickbutton3
            ? () => {
                alert('use the onClick prop to add your own function here');
              }
            : props.onClickbutton3
        }
        variant={!props.buttonVariant3 ? 'secondary ' : props.buttonVariant3}
        type="submit"
        size={!props.buttonSize3 ? '' : props.buttonSize3}
        disabled={!props.buttonDisabled3 ? false : props.buttonDisabled3}
        active={!props.buttongActive3 ? false : props.buttongActive3}
      >
        {!props.buttonText3 ? 'text change here 3' : props.buttonText3}
      </Button>
    </ButtonGroup>
  );
};

interface CardComponentProps {
  onClick?: () => void;
  buttonText?: string;
  cardTitle: string;
  cardDescription: string;
  cardStyle: {};
  cardImage: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-light'
    | 'outline-link';
  size?: 'lg' | 'sm';
  disabled?: boolean;
  active?: boolean;
}

export const CardComponent: React.FC<CardComponentProps> = (
  props: any
): any => {
  return (
    <Card style={!props.cardStyle ? { width: '18rem' } : props.cardStyle}>
      <Card.Img
        variant="top"
        src={
          !props.cardImage
            ? 'https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc'
            : props.cardImage
        }
      />
      <Card.Body>
        <Card.Title>
          {!props.cardTitle ? 'Card Title Change Here ' : props.cardTitle}
        </Card.Title>
        <Card.Text>
          {!props.cardDescription
            ? 'Card Description Change Here '
            : props.cardDescription}
        </Card.Text>
        <Button
          onClick={
            !props.onClick
              ? () => {
                  alert('use the onClick prop to add your own function here');
                }
              : props.onClick
          }
          variant={!props.variant ? 'secondary ' : props.variant}
        >
          {!props.buttonText ? 'Text Here ' : props.buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
};

interface CarouselComponentProps {
  cardImage1: string;
  cardImage2: string;
  cardImage3: string;
  altImage1: string;
  altImage2: string;
  altImage3: string;
  className1: string;
  className2: string;
  className3: string;
  SlideLable1: string;
  SlideLable2: string;
  SlideLable3: string;
  SlideLableDescription1: string;
  SlideLableDescription2: string;
  SlideLableDescription3: string;
}

export const CarouselComponent: React.FC<CarouselComponentProps> = (
  props: any
): any => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className={!props.className1 ? 'd-block w-100' : props.className1}
          src={
            !props.cardImage1
              ? 'https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc'
              : props.cardImage1
          }
          alt={!props.altImage1 ? 'alt image 1' : props.altImage1}
        />
        <Carousel.Caption>
          <h3>
            {!props.SlideLable1 ? 'First slide label' : props.SlideLable1}
          </h3>
          <p>
            {!props.SlideLableDescription1
              ? 'First Slide Description'
              : props.SlideLableDescription1}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={!props.className2 ? 'd-block w-100' : props.className2}
          src={
            !props.cardImage2
              ? 'https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc'
              : props.cardImage2
          }
          alt={!props.altImage1 ? 'alt image 2' : props.altImage1}
        />
        <Carousel.Caption>
          <h3>
            {!props.SlideLable2 ? 'Second slide label' : props.SlideLable2}
          </h3>
          <p>
            {!props.SlideLableDescription3
              ? 'Second Slide Description'
              : props.SlideLableDescription3}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={!props.className3 ? 'd-block w-100' : props.className3}
          src={
            !props.cardImage3
              ? 'https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc'
              : props.cardImage3
          }
          alt={!props.altImage3 ? 'alt image 1' : props.altImage3}
        />
        <Carousel.Caption>
          <h3>
            {!props.SlideLable3 ? 'Third slide label' : props.SlideLable3}
          </h3>
          <p>
            {!props.SlideLableDescription3
              ? 'Third Slide Description'
              : props.SlideLableDescription3}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

interface CloseButtonProps {
  onClick?: () => void;
  variant?: 'white';
  className: string;
  disabled?: boolean;
}

export const CloseButtonComponent: React.FC<CloseButtonProps> = (
  props: any
): any => {
  return (
    <div className={!props.className ? 'bg-dark p-3' : props.className}>
      <CloseButton
        variant={!props.variant ? 'white' : props.variant}
        disabled={!props.variant ? false : props.variant}
        onClick={
          !props.onClick
            ? () => {
                alert('put your function here');
              }
            : props.onClick
        }
      />
    </div>
  );
};

interface DropDownComponentProps {
  onClick1?: () => void;
  onClick2?: () => void;
  onClick3?: () => void;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-light'
    | 'outline-link';
  dropDownText?: string;
  dropDownItemText1: string;
  dropDownItemText2: string;
  dropDownItemText3: string;
  id: string;
}

export const DropDownComponent: React.FC<DropDownComponentProps> = (
  props: any
): any => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          variant={!props.variant ? 'primary' : props.variant}
          id={!props.variant ? 'dropdown' : props.variant}
        >
          {!props.dropDownText ? 'Dropdown Text' : props.dropDownText}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={
              !props.onClick1
                ? () => {
                    alert('put your function here');
                  }
                : props.onClick1
            }
          >
            {!props.dropDownItemText1
              ? 'Dropdown Item  Text 1 '
              : props.dropDownItemText1}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={
              !props.onClick2
                ? () => {
                    alert('put your function here');
                  }
                : props.onClick2
            }
          >
            {!props.dropDownItemText2
              ? 'Dropdown Item  Text 2 '
              : props.dropDownItemText2}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={
              !props.onClick3
                ? () => {
                    alert('put your function here');
                  }
                : props.onClick3
            }
          >
            {!props.dropDownItemText3
              ? 'Dropdown Item  Text 3 '
              : props.dropDownItemText3}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

interface ProfileComponentProps {
  onClick?: () => void;
  profileSrc: string;
  profileWidth: number;
  profileHeight: number;
  profileAlt: string;
  profileDescription: string;
}

export const ProfileComponent: React.FC<ProfileComponentProps> = (
  props: any
): any => {
  return (
    <Figure>
      <Figure.Image
        width={!props.profileWidth ? 171 : props.profileWidth}
        height={!props.profileHeight ? 180 : props.profileHeight}
        alt={!props.profileAlt ? "Profile's Alt" : props.profileAlt}
        src={
          !props.profileSrc
            ? 'https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc'
            : props.profileSrc
        }
      />
      <Figure.Caption>
        {!props.profileDescription
          ? 'Profile Description Change'
          : props.profileDescription}
      </Figure.Caption>
    </Figure>
  );
};

interface FormComponentProps {
  onClick?: () => void;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-light'
    | 'outline-link';
  size?: 'lg' | 'sm';
  disabled?: boolean;
  active?: boolean;
  fieldText1: string;
  fieldText2: string;
  checkboxText: string;
  placeHolderField1: 'string';
  placeHolderField2: 'string';
  controlIdField1: string;
  controlIdField2: string;
  classNameField1: string;
  classNameField2: string;
  submitText: string;
}

export const FormComponent: React.FC<FormComponentProps> = (
  props: any
): any => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          {!props.fieldText1 ? 'Email Text change ' : props.fieldText1}
        </Form.Label>
        <Form.Control
          type="email"
          placeholder={
            !props.placeHolderField1
              ? 'Place Holder Field 1  '
              : props.placeHolderField1
          }
        />
      </Form.Group>
      <Form.Group
        className={!props.classNameField1 ? 'mb-3 ' : props.classNameField1}
        controlId={
          !props.controlIdField1 ? 'Field One Id ' : props.controlIdField1
        }
      >
        <Form.Label>
          {!props.fieldText2 ? 'Password Text change ' : props.fieldText2}
        </Form.Label>
        <Form.Control
          type="password"
          placeholder={
            !props.placeHolderField2
              ? 'Place Holder Field 2 '
              : props.placeHolderField2
          }
        />
      </Form.Group>
      <Form.Group
        className={!props.classNameField2 ? 'mb-3 ' : props.classNameField2}
        controlId={
          !props.controlIdField2 ? 'Field Two Id ' : props.controlIdField2
        }
      >
        <Form.Check
          type="checkbox"
          label={
            !props.checkboxText ? 'Label Text change ' : props.checkboxText
          }
        />
      </Form.Group>
      <Button
        size={!props.size ? '' : props.size}
        active={!props.active ? false : props.active}
        disabled={!props.disabled ? false : props.disabled}
        variant={!props.variant ? 'primary' : props.variant}
        type="submit"
      >
        {!props.submitText ? 'Submit' : props.submitText}
      </Button>
    </Form>
  );
};

interface ImageComponentProps {
  onClick?: () => void;
  Imagesrc: string;
  imageAlt: string;
  roundedCircle: boolean;
}

export const ImageComponent: React.FC<ImageComponentProps> = (
  props: any
): any => {
  return (
    <Image
      src={
        !props.Imagesrc
          ? 'https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc'
          : props.Imagesrc
      }
      alt={!props.imageAlt ? 'image alt' : props.imageAlt}
      onClick={
        !props.onClick
          ? () => {
              alert('use the onClick prop to add your own function here');
            }
          : props.onClick
      }
      roundedCircle={!props.active ? false : props.active}
    />
  );
};

interface ListGroupComponentProps {
  onClick1?: () => void;
  onClick2?: () => void;
  onClick3?: () => void;
  variant1?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-light'
    | 'outline-link';
  variant2?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-light'
    | 'outline-link';
  variant3?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-light'
    | 'outline-link';
  disabled1: boolean;
  disabled2: boolean;
  disabled3: boolean;
  listGroupText1: string;
  listGroupText2: string;
  listGroupText3: string;
}

export const ListGroupComponent: React.FC<ListGroupComponentProps> = (
  props: any
): any => {
  return (
    <ListGroup>
      <ListGroup.Item
        variant={!props.variant1 ? '' : props.variant1}
        onClick={
          !props.onClick1
            ? () => {
                alert('use the onClick prop to add your own function here');
              }
            : props.onClick1
        }
        disabled={!props.disabled1 ? false : props.disabled1}
      >
        {!props.listGroupText1 ? 'List Group Item 1 ' : props.listGroupText1}
      </ListGroup.Item>
      <ListGroup.Item
        variant={!props.variant2 ? '' : props.variant2}
        onClick={
          !props.onClick2
            ? () => {
                alert('use the onClick prop to add your own function here');
              }
            : props.onClick2
        }
        disabled={!props.disabled2 ? false : props.disabled2}
      >
        {!props.listGroupText2 ? 'List Group Item 2 ' : props.listGroupText2}
      </ListGroup.Item>

      <ListGroup.Item
        variant={!props.variant3 ? '' : props.variant3}
        onClick={
          !props.onClick3
            ? () => {
                alert('use the onClick prop to add your own function here');
              }
            : props.onClick3
        }
        disabled={!props.disabled3 ? false : props.disabled3}
      >
        {!props.listGroupText3 ? 'List Group Item 3' : props.listGroupText3}
      </ListGroup.Item>
    </ListGroup>
  );
};

interface ModalComponentProps {
  onClickButtonLeft: () => void;
  onClickButtonRight: () => void;
  buttonLeftText: string;
  buttonRightText: string;
  onhide: () => void;
  modalTitle: string;
  modalBodyDescription: string;

  showModal: boolean;
}

export const ModalComponent: React.FC<ModalComponentProps> = (
  props: any
): any => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <Modal
      onHide={!props.onhide ? () => setShow(false) : props.onhide}
      show={!props.showModal ? show : props.showModal}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>
            {!props.modalTitle ? 'Modal Title Change ' : props.modalTitle}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            {!props.modalBodyDescription
              ? 'Modal Title Change '
              : props.modalBodyDescription}
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={
              !props.onClickButtonLeft
                ? () => setShow(false)
                : props.onClickButtonLeft
            }
            variant="secondary"
          >
            {!props.buttonLeftText ? 'Close ' : props.buttonLeftText}
          </Button>
          <Button
            onClick={
              !props.onClickButtonRight
                ? () => setShow(false)
                : props.onClickButtonRight
            }
            variant="primary"
          >
            {!props.buttonRightText ? 'Save Changes ' : props.buttonRightText}
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};
interface NavComponentProps {
  onSelectAllMapping?: () => void;
  eventKeyNav1: string;
  eventKeyNav2: string;
  eventKeyNav3: string;
  TitleNav1: string;
  TitleNav2: string;
  TitleNav3: string;
  Disabled1: boolean;
  Disabled2: boolean;
  Disabled3: boolean;
}

export const NavComponent: React.FC<NavComponentProps> = (props: any): any => {
  return (
    <Nav
      onSelect={
        !props.onSelectAllMapping
          ? (selectedKey) =>
              alert(
                `Apply function for each selected nav using the select key ${selectedKey}`
              )
          : props.onSelectAllMapping
      }
    >
      <Nav.Item>
        <Nav.Link
          eventKey={!props.eventKeyNav1 ? '1' : props.eventKeyNav1}
          disabled={!props.Disabled1 ? false : props.Disabled1}
        >
          {!props.TitleNav1 ? 'Title Nav 1 ' : props.TitleNav1}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey={!props.eventKeyNav2 ? '2' : props.eventKeyNav2}
          disabled={!props.Disabled2 ? false : props.Disabled2}
        >
          {!props.TitleNav2 ? 'Title Nav 2 ' : props.TitleNav2}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey={!props.eventKeyNav3 ? '3' : props.eventKeyNav3}
          disabled={!props.Disabled3 ? false : props.Disabled3}
        >
          {!props.TitleNav3 ? 'Title Nav 3 ' : props.TitleNav3}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

interface OffcanvasComponentProps {
  ButtonOnClickShowCanvas: () => void;
  OffcanvasOnClickShowCanvas: () => void;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-light'
    | 'outline-link';
  size?: 'lg' | 'sm';
  disabled?: boolean;
  active?: boolean;
  isOffCanvas: boolean;
  launchOffcanvasText: string;
  OffcanvasTitle: string;
  OffcanvasBodyDescription: string;
}

export const OffcanvasComponent: React.FC<OffcanvasComponentProps> = (
  props: any
): any => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        variant={!props.variant ? 'primary ' : props.variant}
        size={!props.size ? '' : props.size}
        disabled={!props.disabled ? false : props.disabled}
        active={!props.active ? false : props.active}
        onClick={
          !props.ButtonOnClickShowCanvas
            ? () => setShow(true)
            : props.ButtonOnClickShowCanvas
        }
      >
        {!props.launchOffcanvasText
          ? 'Button Launch Canvas'
          : props.launchOffcanvasText}
      </Button>
      <Offcanvas
        show={!props.isOffCanvas ? show : props.isOffCanvas}
        onHide={
          !props.OffcanvasOnClickShowCanvas
            ? () => setShow(false)
            : props.OffcanvasOnClickShowCanvas
        }
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {!props.OffcanvasTitle ? 'Offcanvas Title' : props.OffcanvasTitle}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {!props.OffcanvasBodyDescription
            ? 'Offcanvas Body Description'
            : props.OffcanvasBodyDescription}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

interface OverlayComponentProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-light'
    | 'outline-link';
  size?: 'lg' | 'sm';
  disabled?: boolean;
  active?: boolean;
  isShown: boolean;
  overlayPlacement: 'bottom' | 'left' | 'right' | 'top';
  opacity: number;
  buttonText: string;
  overlayText: string;
}

export const OverlayComponent: React.FC<OverlayComponentProps> = (
  props: any
): any => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button
        variant={!props.variant ? 'primary ' : props.variant}
        size={!props.size ? '' : props.size}
        disabled={!props.disabled ? false : props.disabled}
        active={!props.active ? false : props.active}
        ref={target}
        onClick={!props.isShown ? () => setShow(!show) : props.isShown}
      >
        {!props.buttonText ? 'click to see' : props.buttonText}
      </Button>
      <Overlay
        target={target.current}
        show={show}
        placement={!props.overlayPlacement ? 'right' : props.overlayPlacement}
      >
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: `rgba(255, 100, 100, ${
                !props.opacity ? 0.85 : props.opacity
              })`,
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            {!props.overlayText ? 'Overlay Text' : props.overlayText}
          </div>
        )}
      </Overlay>
    </>
  );
};
