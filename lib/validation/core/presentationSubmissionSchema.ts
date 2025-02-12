export class PresentationSubmissionSchema {
  //TODO: pass it with a config file
  public static getPresentationSubmissionSchema() {
    return {
      $schema: 'http://json-schema.org/draft-07/schema#',
      title: 'Presentation Submission',
      type: 'object',
      properties: {
        presentation_submission: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            definition_id: {
              type: 'string',
            },
            descriptor_map: {
              type: 'array',
              items: {
                $ref: '#/definitions/descriptor',
              },
            },
          },
          required: ['id', 'definition_id', 'descriptor_map'],
          additionalProperties: false,
        },
      },
      definitions: {
        descriptor: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            path: {
              type: 'string',
            },
            path_nested: {
              type: 'object',
              $ref: '#/definitions/descriptor',
            },
            format: {
              type: 'string',
              enum: ['jwt', 'jwt_vc', 'jwt_vc_json', 'jwt_vp', 'ldp', 'ldp_vc', 'ldp_vp', 'vc+sd-jwt'],
            },
          },
          required: ['id', 'path', 'format'],
          additionalProperties: false,
        },
      },
      required: ['presentation_submission'],
      additionalProperties: false,
    };
  }
}
