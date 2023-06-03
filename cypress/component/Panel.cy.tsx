import { mount } from 'cypress/react18';
import { Panel } from '../../src/components/Panel';

describe('<Panel />', () => {
  it("should display title", () => {
    mount(
      <Panel title="My Profile" />
    );
    cy.contains('My Profile').should('be.visible')
    // cy.document().should('contain.text', 'My Profile')
  });

  it("should display content when the component is mount", () => {
    mount(
      <Panel
        title="My Profile"
      > lorem... </Panel>
    );

    cy.contains('lorem...').should('be.visible')
  });

  it("should hide children when title bar is clicked", () => {
    mount(
      <Panel
        title="My Profile"
      > lorem... </Panel>
    );

    cy.contains('My Profile').click()
    cy.contains('lorem...').should('not.exist')
  });

  it("should toggle children when title bar is clicked twice", () => {
    mount(
      <Panel
        title="My Profile"
      > lorem... </Panel>
    );

    cy.contains('My Profile').click()
    cy.contains('My Profile').click()
    cy.contains('lorem...').should('be.visible')
  });


  it("should display an icon in the title bar", () => {
    mount(
      <Panel
        title="My Profile"
        icon="⭐️"
      > lorem... </Panel>
    );
    cy.contains('⭐️').should('be.visible')
    //cy.document().should('contain.text', '⭐️')
  });

  it("should invoke a function when icon is clicked", () => {
    const onClickSpy = cy.spy().as('onClickSpy')
    mount(
      <Panel
        title="My Profile"
        icon={'♥️'}
        onIconClick={onClickSpy}
      > lorem... </Panel>
    );
    cy.contains('♥️').click()
    cy.get('@onClickSpy').should('have.been.calledOnce')
  });

  it('should not toggle the title bar when the icon is clicked', () => {
    mount(
      <Panel
        title="My Profile"
        icon={'💩'}
      > lorem... </Panel>
    );

    cy.contains('💩').click()
    cy.contains('lorem...').should('be.visible')
  })

  it('should hide content if the open property is set to false', () => {
    mount(
      <Panel
        title="My Profile"
        open={false}
      > lorem... </Panel>
    );
    cy.contains('lorem...').should('not.exist')
  })

  it('should show content if the open property is set to true', () => {
    mount(
      <Panel
        title="My Profile"
        open={true}
      > lorem... </Panel>
    );

    cy.contains('lorem...').should('be.visible')
  })
})
