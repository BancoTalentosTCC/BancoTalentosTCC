import { Meteor } from 'meteor/meteor';
import { assert, expect } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import { student, company } from '/imports/api/seed/users.js';
import { job } from '/imports/api/seed/jobs.js';
import { sinon } from 'meteor/practicalmeteor:sinon';
import '/imports/api/server/methods.js';

describe('Application methods', () => {
  beforeEach(() => {
    resetDatabase();
  });

  describe('Inserting Company', () => {
    it('successfully inserts a company into the users collection', () => {
      let id = Meteor.call('saveCompany', company);
      assert.equal(typeof(id), 'string', "should return user id");

      let user = Meteor.users.find({_id: id}).fetch();
      assert.equal(user.length, 1, "should list 1 user");
    });

    it('doesn\'t insert company into the users collection when document has errors', () => {
      let result, error;
      Meteor.call('saveCompany', {}, (err, res) => {
        result = res;
        error = err;
      });

      assert.equal(result, undefined, "doesn't return result");
      assert.equal(error.message, "Need to set a username or email [400]", "return error message");
    });
  });

  describe('Inserting Student', () => {
    it('successfully inserts a student into the users collection', () => {
      let id = Meteor.call('saveStudent', student);
      assert.equal(typeof(id), 'string', "should return user id");

      let user = Meteor.users.find({_id: id}).fetch();
      assert.equal(user.length, 1, "should list 1 user");
    });

    it('doesn\'t insert student into the users collection when document has errors', () => {
      let result, error;
      Meteor.call('saveStudent', {}, (err, res) => {
        result = res;
        error = err;
      });

      assert.equal(result, undefined, "doesn't return result");
      assert.equal(error.message, "Need to set a username or email [400]", "return error message");
    });
  });

  describe('Executing job related methods', () => {
    beforeEach(() => {
      sinon.stub(Meteor, "user", () =>  company);
      sinon.stub(Meteor, "userId", () =>  'id');
    });

    afterEach(function () {
      Meteor.user.restore();
      Meteor.userId.restore();
    });

    it('successfully create a new job', () => {
      let id = Meteor.call('saveJob', job);
      assert.equal(typeof(id), 'string', "should return job id");

      let jobs = Jobs.find({_id: id}).fetch();
      assert.equal(jobs.length, 1, "should list 1 job");
    });

    it('doesn\'t create job when document has errors', () => {
      let result, error;
      Meteor.call('saveJob', {}, (err, res) => {
        result = res;
        error = err;
      });

      assert.equal(result, undefined, "doesn't return result");
      assert.equal(error.message, "Categoria is required", "return error message");
    });

    it('successfully retrieves company id', () => {
      let jobId = Jobs.insert(job);
      let companyId = Meteor.call('findCompanyByJob', jobId);
      assert.equal(companyId, 'id', "returns company id");
    });

    it('successfully applies to job', () => {
      let jobId = Jobs.insert(job);
      Meteor.call('applyToJob', jobId);

      let jobApplied = Jobs.find({_id: jobId}).fetch()[0];
      assert.equal(jobApplied.applications[0], 'id', "matches company id");
    });

    it('successfully deactivates job', () => {
      let jobId = Jobs.insert(job);
      Meteor.call('deactivateJob', jobId);
      
      let jobApplied = Jobs.find({_id: jobId}).fetch()[0];
      assert.equal(jobApplied.status, 'disabled', "status changes to disabled");
    });
  });

  describe('Sending verification email', () => {
    it('successfully calls sendVerificationEmail()', () => {
      var verification = sinon.stub(Accounts, "sendVerificationEmail");

      Meteor.call('sendVerificationLink', 'id');
      assert(verification.withArgs('id').calledOnce);

      Accounts.sendVerificationEmail.restore();
    });
  });

  describe('Updating Student Profile', () => {
    var id;
    beforeEach(() => {
      id = Accounts.createUser(student);
      sinon.stub(Meteor, "userId", () =>  id);
      sinon.stub(Meteor, "user", () =>  ({emails: [student.email]}));
    });

    afterEach(function () {
      Meteor.user.restore();
      Meteor.userId.restore();
    });

    it('successfully updates "dados gerais"', () => {
      let formId = "upd-aboutyou";
      let userUpdate = {
        emails: { address: 'borgespereira.marcelo@gmail.com', verified: false },
        profile: 
          { nome: 'MARCELO BORGES PEREIRA',
            nascimento: '11-02-1993',
            perfil: 'aluno',
            sexo: 'm',
            especial: false 
        } 
      };

      Roles.addUsersToRoles(id, 'student', 'user-type');
      Meteor.call('updateUser', userUpdate, formId);

      let user = Meteor.users.find({_id: id}).fetch()[0];

      assert.equal(user.emails[1].address, userUpdate.emails.address, "should match user secondary emails");
      assert.equal(user.profile.nome, userUpdate.profile.nome, "should match user 'nome'");
      assert.equal(user.profile.nascimento, userUpdate.profile.nascimento, "should match user 'nascimento'");
      assert.equal(user.profile.perfil, userUpdate.profile.perfil, "should match user 'perfil'");
      assert.equal(user.profile.sexo, userUpdate.profile.sexo, "should match user 'sexo'");
      assert.equal(user.profile.especial, userUpdate.profile.especial, "should match user 'especial'");
    });
  });
});
