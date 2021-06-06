'use strict';

exports.up = function(knex) {
  return knex.schema.table('users', (table) => {
    table.string('openId');
    table.string('username');
  })
};

exports.down = function(knex) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('openId');
    table.dropColumn('username');
  })
};